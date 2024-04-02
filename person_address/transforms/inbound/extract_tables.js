module.exports = {
  bindings: {
    existingAddresses: { type: 'sql.query', table: 'person_email', columns: ['person_id'] },
    tablesToUpsert: { type: 'sql.tablesToUpsert' },
  },
  async transform({ batch, tablesToUpsert, existingAddresses }) {
    // our address hashing function tried to find identical addresses
    // by removing all non-number and letter fields
    // this is absolutely not-optimal, but works in a pinch
    function hashAddress(addr) {
      return [
        addr.street_1,
        addr.street_2,
        addr.postal_code,
      ].filter(Boolean).join('').replace(/[^a-z0-9]+/gi, '').trim();
    }

    tablesToUpsert.person_address = tablesToUpsert.person_address || [];
    batch.forEach((o) => {
      const hash = hashAddress(o);
      const matchingAddress = existingAddresses
        .find((a) => a.person_id === o.person_id
          && hashAddress(a) === hash);

      const record = {
        id: null,
        type: 'Home',
        person_id: o.person_id,
        street_1: o.street_1,
        street_2: o.street_2,
        city: o.city,
        region: o.region,
        postal_code: o.postal_code,
        country: o.country || 'US',
        subscription_status: 'Not Subscribed',
      };

      if (matchingAddress) {
        /* Put logic here for dealing with overrides, subscription status, etc */
        if (matchingAddress.subscription_status === 'Unsubscribed') {
          record.subscription_status = 'Unsubscribed';
        }
        record.id = matchingAddress.id;
      }
      tablesToUpsert.person_address.push(record);
    });

    return batch;
  },
};
