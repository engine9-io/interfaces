module.exports = {
  bindings: {
    // existingPersonEmails: { path: 'sql.query', table: 'person_email', lookup:['person_id'] },
    databaseEmails: { path: 'sql.query', options: { table: 'person_email', lookup: ['email'] } },
    tablesToUpsert: { path: 'sql.tables.upsert' },
  },
  type: 'upsert',
  async transform(props) {
    const {
      batch, databaseEmails, tablesToUpsert,
    } = props;
    if (batch.length === 0) return;

    batch.forEach((o) => {
      if (!o.email) return;
      tablesToUpsert.person_email = (tablesToUpsert.person_email || []);
      // People like to believe email is case sensitive
      // emails are always trimmed, but that's it for inbound modifications.
      const email = o.email.trim();

      const lcEmail = email.toLowerCase();
      const matchingEmails = databaseEmails
        .filter((em) => em?.email?.trim().toLowerCase() === lcEmail);

      const personEmails = matchingEmails.filter(
        (em) => o.person_id && (em.person_id === o.person_id),
      );
      if (personEmails.length > 1) {
        throw new Error(`Cannot update emails, there are 2 database entries for person_id ${o.person_id} with email ${email}`);
      }
      let status = o.email_subscription_status || o.subscription_status;
      if (lcEmail.startsWith('caesar')) {
        console.log('testing');
      }
      if (personEmails[0]) {
        // if it's explicitly set, then update it, otherwise set it to what it was before
        status = status || personEmails[0].subscription_status;
        tablesToUpsert.person_email.push({
          ...personEmails[0],
          ...o,
          subscription_status: status,
          original: personEmails[0],
        });
      } else {
        tablesToUpsert.person_email.push({
          id: null,
          person_id: o.person_id,
          email,
          subscription_status: status,
          ...o,
          source_input_id: o.input_id,
        });
      }
      // IF an unsubscribe, we need to update the subscription status for ALL related emails,
      // including new ones
      if (status === 'Unsubscribed') {
        matchingEmails.forEach((original) => {
          if (original.subscription_status !== 'Unsubscribed)') {
            tablesToUpsert.person_email.push({ ...original, subscription_status: 'Unsubscribed', original });
          }
        });
        tablesToUpsert.person_email.filter((d) => d.id === null && d.email === email)
          .forEach((d) => {
            d.subscription_status = 'Unsubscribed';
          });
      }
    });
  },
};
