module.exports = async function ({ batch }) {
  const ids = [];
  batch.forEach((e) => {
    e.identifiers = e.identifiers || [];
    if (e.remote_person_id) {
      e.identifiers.push({
        path: 'person_remote', type: 'remote_person_id', value: e.remote_person_id,
      });
    }
  });

  return ids;
};
