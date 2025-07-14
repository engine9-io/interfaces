module.exports = {
  all: {
    title: 'Transactions',
    type: 'object',
    properties: {
      pluginId: {
        type: 'string',
      },
    },
  },
  optionsToEQL: (options) => {
    const { pluginId } = options;
    const conditions = [];
    if (pluginId) {
      conditions.push(`plugin_id='${pluginId}'`);
    }

    return {
      table: 'transaction',
      joins: [
        {
          table: 'input',
          join_eql: 'transaction.input_id=input.id',
        },
      ],
      columns: ['person_id'],
      conditions,
    };
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
