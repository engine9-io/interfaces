module.exports = {
  bindings: {
    // existingPersonEmails: { type: 'sql.query', table: 'person_email', lookup:['person_id'] },
    databaseEmails: { type: 'sql.query', table: 'person_email', lookup: ['email'] },
    tablesToUpsert: { type: 'sql.tables.upsert' },
    /*
    auditing not yet supported
    auditEntries: {
      type: 'packet.output.timeline',
      columns: [
        'email_type',
        'subscription_status',
        'confirmation_status',
        'deliverability_score',
        'preference_order'],
    },
    */
  },
  async transform({
    batch, databaseEmails, tablesToUpsert,
  }) {
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

      if (personEmails[0]) {
        tablesToUpsert.person_email.push({ ...personEmails[0], ...o, original: personEmails[0] });
      } else {
        tablesToUpsert.person_email.push({
          id: null,
          person_id: o.person_id,
          email,
          subscription_status: o.subscription_status || 'Subscribed',
          ...o,
          source_input_id: o.input_id,
        });
      }
      // IF an unsubscribe, we need to update the subscription status for ALL related emails,
      // including new ones
      if (o.subscription_status === 'Unsubscribed') {
        matchingEmails.forEach((original) => {
          if (original.subscription_status !== 'Unsubscribed)') {
            tablesToUpsert.person_email.push({ ...original, subscription_status: 'Unsubscribed', original });
          }
        });
        tablesToUpsert.person_email.filter((d) => d.id === null && d.email === email)
          .forEach((d) => { d.subscription_status = 'Unsubscribed'; });
      }
    });
  },
};
