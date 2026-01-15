export const parsing = {
  label: 'Overall Parsing',
  description: '',
  eql: {
    table: 'source_code_summary',
    columns: [
      { eql: 'count(*)', name: 'records' },
      { eql: 'sum(case when length(format)>0 then 1 else 0 end)', name: 'parsed' }
    ],
    conditions: []
  }
};
export const recent_parsing = {
  label: 'Parsing last 30 days',
  description: '',
  eql: {
    table: 'source_code_summary',
    columns: [
      { eql: 'count(*)', name: 'records' },
      { eql: 'sum(case when length(format)>0 then 1 else 0 end)', name: 'parsed' }
    ],
    conditions: [{ eql: 'date_sub(now(), interval 30 day)' }]
  }
};
export default {
  parsing,
  recent_parsing
};
