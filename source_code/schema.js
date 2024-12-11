module.exports = {
  tables: [
    {
      name: 'source_code_dictionary',
      columns: {
        source_code_id: 'id',
        source_code: {
          type: 'string',
          length: 180,
        },
        format: 'string',
        format_regex: 'string',
        source_code_channel: 'string',
        source_code_last_used: 'timestamp',
        parsing: 'json',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: 'source_code_id', primary: true },
        { columns: 'source_code', unique: true },
        { columns: 'source_code_last_used' },
      ],
    },
  ],
};
