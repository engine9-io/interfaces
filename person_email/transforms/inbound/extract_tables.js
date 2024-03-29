module.exports = async function ({ batch, tablesToUpsert }) {
  tablesToUpsert.person_email = tablesToUpsert.person_email || [];
  batch.forEach((o) => {
    tablesToUpsert.person_email.push({
      person_id: o.person_id,
      email: o.email,
    });
  });

  return batch;
};
