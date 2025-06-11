module.exports = {
  description: 'Append a name',
  bindings: {
    names: {
      path: 'sql.query',
      options: {
        table: 'person',
        columns: [
          'id',
          'given_name',
          'family_name',
        ],
        lookup: [{
          personIdField: 'person_id',
          tableLookupField: 'id',
        }],
      },
    },
  },
  transform: ({ batch, names }) => {
    const nameMap = names.reduce((a, b) => {
      a[b.id] = a[b.id] || b;
      return a;
    }, {});
    batch.forEach((data) => {
      const o = nameMap[data.person_id] || {};
      data.given_name = o.given_name || null;
      data.family_name = o.family_name || null;
    });
  },
};
