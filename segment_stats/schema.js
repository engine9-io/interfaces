const statsColumns = {
  transactions: 'int',
  evenue: 'currency',
};
module.exports = {

  tables: [
    {
      name: 'segment_stats',
      columns: {
        id: 'id',
        segment_id: 'foreign_id',
        ...statsColumns,
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: ['segment_id'] },
      ],
    },
    {
      name: 'segment_stats_by_date',
      columns: {
        id: 'id',
        segment_id: 'foreign_id',
        date: 'date',
        ...statsColumns,
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: ['segment_id', 'date'], unique: true },
      ],
    },
  ],
};
