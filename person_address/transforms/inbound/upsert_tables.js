module.exports = {
  bindings: {
    existingAddresses: { path: 'sql.query', options: { table: 'person_address', lookup: ['person_id'] } },
    tablesToUpsert: { path: 'sql.tables.upsert' },
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
      if (hash.length === 0) return;
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
      } else {
        record.source_input_id = o.input_id;
      }
      tablesToUpsert.person_address.push(record);
    });

    return batch;
  },
};
