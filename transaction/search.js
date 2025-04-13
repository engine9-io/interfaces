module.exports = {
  all: {
    form: {
    },
    optionsToEQL: () => ({
      table: 'transaction',
      columns: ['person_id'],
    }),
  },
  minimum: {
    form: {
      title: 'Transactions',
      type: 'object',
      properties: {
        amount: {
          type: 'number',
        },
        filterType: {
          type: 'string',
        },
      },
      required: [

      ],
    },
    optionsToEQL: (options) => ({
      table: 'transaction',
      columns: ['person_id'],
      conditions: [
        `amount>=${parseFloat(options.amount)}`,
      ],
    }),
  },
};
