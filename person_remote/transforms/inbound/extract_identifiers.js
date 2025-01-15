module.exports = async function ({ batch }) {
  const ids = [];
  batch.forEach((e) => {
    e.identifiers = e.identifiers || [];
    if (e.remote_person_id) {
      if (!e.plugin_id) throw new Error('A remote_person_id requires a plugin_id as well');
      e.identifiers.push({
        path: 'person_remote', type: 'remote_person_id', value: `${e.plugin_id}.${e.remote_person_id}`,
      });
    }
  });

  return ids;
};
