module.exports = async function ({ batch }) {
  batch.tables = { person_email: [], ...batch.tables };
  batch.forEach((o) => {
    batch.tables.person_email.push({
      person_id: o.person_id,
      email: o.email,
    });
  });

  return batch;
};
