module.exports = {
  tables: [
    {
      name: 'person',
      columns: {
        id: 'id',
        person_id: 'person_id',
        type: 'string',
        street_1: 'string',
        street_2: 'string',
        city: 'string',
        region: 'string',
        postal_code: 'string',
      },
      indexes: [
        { columns: 'person_id', unique: true },
      ],
    },
  ],
};
