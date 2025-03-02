const { uuidIsValid } = require('@engine9/packet-tools');

module.exports = async function ({ batch, pluginId }) {
  const ids = [];
  batch.forEach((e) => {
    e.identifiers = e.identifiers || [];
    if (e.remote_person_id) {
      if (!pluginId) throw new Error('A remote_person_id requires a pluginId as well, not found in options');
      if (!uuidIsValid(pluginId)) throw new Error("A pluginId was specified, but it's not a UUID. Perhaps you meant remote_plugin_id?");
      e.identifiers.push({
        path: 'person_remote', type: 'remote_person_id', value: `${pluginId}.${e.remote_person_id}`,
      });
    }
  });

  return ids;
};
