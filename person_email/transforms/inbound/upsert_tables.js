module.exports = {
  bindings: {
    // existingPersonEmails: { type: 'sql.query', table: 'person_email', lookup:['person_id'] },
    existingEmails: { type: 'sql.query', table: 'person_email', lookup: ['email'] },
    tablesToUpsert: { type: 'sql.tables.upsert' },
    auditEntries: { type: 'packet.output.timeline' },
  },
  async transform({
    batch, existingEmails, tablesToUpsert, auditEntries,
  }) {
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
      }
      auditEntries.push(record);

      tablesToUpsert.person_email.push(record);
    });

    return batch;
  },
};
