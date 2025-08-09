const { createHash } = require('node:crypto');

module.exports = {
  async transform({ batch }) {
    batch.forEach((e) => {
      e.email_hash_v1 = e.email_hash_v1 || '';
      if (e.email_hash_v1) {
        // do nothing, already exists
      } else if (e.email) {
        e.email = e.email.trim();// no spaces in emails
        const hashable = e.email.toLowerCase();
        // no secret or createHmac for this use case
        // it's basically a shared id hashing setup, so a secret will be exposed anyhow
        const value = createHash('sha256')
          .update(hashable)
          .digest('hex');

        e.email_hash_v1 = value;
      }
    });
  },
};
