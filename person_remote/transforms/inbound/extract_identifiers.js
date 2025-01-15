const { uuidRegex } = require('@engine9/packet-tools');

module.exports = async function ({ batch }) {
  const ids = [];
  batch.forEach((e) => {
    e.identifiers = e.identifiers || [];
    if (e.remote_person_id) {
      if (!e.plugin_id) throw new Error('A remote_person_id requires a plugin_id as well');
      if (!uuidRegex.test(e.plugin_id)) throw new Error("A plugin_id was specified, but it's not a UUID. Perhaps you meant remote_plugin_id?");
      e.identifiers.push({
        path: 'person_remote', type: 'remote_person_id', value: `${e.plugin_id}.${e.remote_person_id}`,
      });
    }
  });

  return ids;
};
