module.exports = {
  description: 'An overview of data in the timeline',
  include_date: true,
  label: 'Person Count By Month',
  template: 'primary',
  data_sources: {
    default: {
      table: 'person',
      date_field: 'ts',
    },
  },
  components: {
    a_title: 'Count of People by Month Created',
    a0: {
      component: 'ComposedChart',
      is_date: true,
      dimension: { label: 'Month', eql: 'MONTH(created_at)' },
      metrics: [{ label: 'People', eql: 'count(*)' }],
      conditions: [],
    },
  },
};
