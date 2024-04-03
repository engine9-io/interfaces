const { createHmac } = require('node:crypto');

module.exports = async function ({ batch }) {
  const ids = [];
  batch.forEach((e) => {
    e.identifiers = e.identifiers || [];
    if (e.email) {
      e.email = e.email.trim();// no spaces in emails
      const hashable = e.email.toLowerCase();
      const value = createHmac('sha256', '')// no secret for this use case -- it's basically a shared id hashing setup, so a secret will be exposed anyhow
        .update(hashable)
        .digest('hex');
      e.identifiers.push({
        path: 'person_email', type: 'email_hash_v1', value,
      });
    }
  });

  return ids;
};
