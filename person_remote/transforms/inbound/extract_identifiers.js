const { uuidIsValid } = require('@engine9-io/input-tools');

module.exports = {
  type: 'id',
  description: 'Extract the remote_person_id for use in lookups',
  async transform({ batch, pluginId }) {
    const ids = [];
    batch.forEach((o) => {
      o.identifiers = o.identifiers || [];
      if (o.remote_person_id) {
        const parts = String(o.remote_person_id).split('.');
        let value = null;
        if (parts.length > 1 && uuidIsValid(parts[0])) {
          // There may already be a pluginId prefixed with this
          value = String(o.remote_person_id);
        } else {
          // Otherwise prefix it with the current plugin
          if (!pluginId) throw new Error('A remote_person_id requires a pluginId as well, not found in options');
          if (!uuidIsValid(pluginId)) throw new Error("A pluginId was specified, but it's not a UUID. Perhaps you meant remote_plugin_id?");
          value = `${pluginId}.${o.remote_person_id}`;
        }
        o.identifiers.push({
          path: 'person_remote', type: 'remote_person_id', value,
        });
      }
    });
    return ids;
  },
};
