module.exports = {
  bindings: {
    existingEmails: { type: 'sql.query', table: 'person_email', columns: ['person_id'] },
    tablesToUpsert: { type: 'sql.tablesToUpsert' },
  },
  async transform({ batch, existingEmails, tablesToUpsert }) {
    tablesToUpsert.person_email = tablesToUpsert.person_email || [];
    batch.forEach((o) => {
      const lcEmail = o.email.trim().toLowerCase();
      const existingEmail = existingEmails
        .find((em) => em.person_id === o.person_id
          && em?.email?.trim().toLowerCase() === lcEmail);

      const record = {
        id: null,
        person_id: o.person_id,
        email: o.email,
        subscription_status: 'Subscribed',
      };

      if (existingEmail) {
        /* Put logic here for dealing with overrides, subscription status, etc */
        if (existingEmail.subscription_status === 'Unsubscribed') {
          record.subscription_status = 'Unsubscribed';
        }
        record.id = existingEmail.id;
      } else {
        tablesToUpsert.person_email.push({
          id: null,
          person_id: o.person_id,
          email: o.email,
        });
      }
      tablesToUpsert.person_email.push(record);
    });

    return batch;
  },
};
