module.exports = {
  tables: [
    {
      name: 'timeline',
      columns: {
        id: 'uuid',
        ts: 'datetime',
        input_id: 'uuid', // keep as uuid because it's required
        entry_type_id: 'int',
        person_id: 'person_id',
        source_code_id: 'foreign_id',
        created_at: 'created_at',
      },
      indexes: [
        { columns: 'id', primary: true },
        { columns: 'ts,input_id,entry_type_id,person_id,source_code_id' },
        { columns: 'person_id' },
      ],
    },
    {
      name: 'input',
      columns: {
        id: 'id_uuid',
        plugin_id: 'string',
        remote_input_id: 'string', // The remote id from the plugin, used for looking up the id
        input_type: 'string', // Type of input, e.g. message, petition, signup_form, advocacy_action, etc
        location: 'string', // Location of the data
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
    },
  ],
};
