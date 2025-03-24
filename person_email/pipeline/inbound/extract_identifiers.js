const { createHash } = require('node:crypto');

module.exports = {
  type: 'id',
  async transform({ batch }) {
    const ids = [];
    batch.forEach((e) => {
      e.identifiers = e.identifiers || [];
      if (e.email) {
        e.email = e.email.trim();// no spaces in emails
        const hashable = e.email.toLowerCase();
        // no secret or createHmac for this use case
        // it's basically a shared id hashing setup, so a secret will be exposed anyhow
        const value = createHash('sha256')
          .update(hashable)
          .digest('hex');
        // Push all identifiers, later in the pipeline the priority will be determined
        e.identifiers.push({
          path: 'person_email', type: 'email_hash_v1', value,
        });

        e.email_hash_v1 = value;
      }
    });

    return ids;
  },
};
