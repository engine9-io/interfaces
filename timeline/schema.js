module.exports = {
  tables: [
    {
      name: 'timeline',
      columns: {
        id: 'id_uuid',
        ts: 'datetime',
        input_id: 'uuid', // keep as uuid because it's required
        entry_type_id: 'int',
        person_id: 'person_id',
        source_code_id: 'source_code_id',
        created_at: 'created_at'
      },
      indexes: [{ columns: 'id', primary: true }, { columns: 'ts' }, { columns: 'person_id' }, { columns: 'input_id' }]
    }
  ]
};
