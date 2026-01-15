export const description = 'An overview of data in the timeline';
export const include_date = true;
export const name = 'Person Count By Month';
export const template = 'primary';
export const data_sources = {
  default: {
    table: 'person',
    date_field: 'ts'
  }
};
export const components = {
  aTitle: 'Count of People by Month Created',
  a0: {
    component: 'ComposedChart',
    isDate: true,
    dimension: { name: 'Month', eql: 'MONTH(created_at)' },
    metrics: [{ name: 'People', eql: 'count(*)' }],
    conditions: []
  }
};
export default {
  description,
  include_date,
  name,
  template,
  data_sources,
  components
};
