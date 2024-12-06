module.exports = {
  description: 'An overview of data in the timeline',
  include_date: true,
  name: 'Person Count By Month',
  template: 'primary',
  data_sources: {
    default: {
      table: 'person',
      date_field: 'ts',
    },
  },
  components: {
    aTitle: 'Count of People by Month Created',
    a0: {
      component: 'ComposedChart',
      isDate: true,
      dimension: { name: 'Month', eql: 'MONTH(created_at)' },
      metrics: [{ name: 'People', eql: 'count(*)' }],
      conditions: [],
    },
  },
};
