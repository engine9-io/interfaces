module.exports = {

  tables: [
    {
      name: 'segment_stats',
      columns: {
        id: 'id',
        segment_id: 'foreign_id',
        transactions: 'int',
        revenue: 'currency',
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
        transactions: 'int',
        revenue: 'currency',
        created_at: 'created_at',
        modified_at: 'modified_at',
      },
      indexes: [
        { columns: ['segment_id', 'date'], unique: true },
      ],
    },
  ],
};
