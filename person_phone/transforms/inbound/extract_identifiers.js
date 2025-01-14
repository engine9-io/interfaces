const { createHash } = require('node:crypto');

module.exports = async function ({ batch }) {
  const ids = [];
  batch.forEach((e) => {
    e.identifiers = e.identifiers || [];
    if (e.phone) {
      // clean and add a plus
      let phone = e.phone.replace(/[^0-9+]*/g, '').trim();
      // clean us based phones.  If it's already prefixed with '+' then assume
      // it's intentional
      if (phone.length === 10 && phone.indexOf('+') < 0) phone = `+1${phone}`;
      // no secret or createHmac for this use case
      // it's basically a shared id hashing setup, so a secret will be exposed anyhow
      const value = createHash('sha256')
        .update(phone)
        .digest('hex');
      e.identifiers.push({
        path: 'person_phone', type: 'phone_hash_v1', value,
      });
      e.phone = phone;
      e.phone_hash_v1 = value;
    }
  });

  return ids;
};
