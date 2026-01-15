export const all = {
  form: {
    title: 'Transactions',
    type: 'object',
    properties: {
      pluginId: {
        type: 'string'
      }
    }
  },
  optionsToEQL: (options) => {
    const { pluginId } = options;
    const conditions = [];
    let text = 'Has any transactions';
    if (pluginId) {
      conditions.push(`input.plugin_id='${pluginId}'`);
      text += ` from plugin ${pluginId}`;
    }
    return {
      text,
      eql: {
        table: 'transaction',
        joins: [
          {
            table: 'input',
            join_eql: 'transaction.input_id=input.id'
          }
        ],
        columns: ['person_id'],
        conditions
      }
    };
  }
};
export const minimum = {
  form: {
    title: 'Transactions',
    type: 'object',
    properties: {
      amount: {
        type: 'number'
      },
      filterType: {
        type: 'string'
      }
    },
    required: []
  },
  optionsToEQL: (options) => ({
    table: 'transaction',
    columns: ['person_id'],
    conditions: [`amount>=${parseFloat(options.amount)}`]
  })
};
export default {
  all,
  minimum
};
