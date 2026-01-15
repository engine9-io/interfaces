export const people = ({ plugin: { tablePrefix } }) => {
  return {
    label: 'Remote People',
    description: '',
    eql: {
      table: tablePrefix + 'person',
      columns: [
        { eql: 'min(date_created)', name: 'first_date' },
        { eql: 'max(date_created)', name: 'last_date' },
        { eql: 'count', name: 'records' }
      ]
    }
  };
};
export default {
  people
};
