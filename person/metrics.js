export const people = () => {
  return {
    label: 'People',
    description: '',
    eql: {
      table: 'person',
      columns: [
        { eql: 'min(created_at)', name: 'first_date' },
        { eql: 'max(created_at)', name: 'last_date' },
        { eql: 'count', name: 'records' }
      ]
    }
  };
};
export default {
  people
};
