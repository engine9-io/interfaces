module.exports = async function transform({ batch }) {
  batch.tables = { person_phone: [], ...batch.tables };
  batch.forEach((o) => {
    batch.tables.person_phone.push({
      person_id: o.person_id,
      phone: o.phone,
      type: o.type || 'mobile', // set a mobile phone as a default
    });
  });

  return batch;
};
