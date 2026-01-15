{
  const o = {
    data_sources: {
      default: {
        table: 'global_message_summary',
        date_field: 'publish_date',
        conditions: [{ eql: "channel='email'" }]
      }
    },
    scope: 'global',
    name: 'Email Fundraising',
    description: 'Revenue performance by message & date, including basic performance stats.',
    tags: ['Email', 'Fundraising'],
    subcategory: 'Email',
    components: {
      aTitle: 'Top Line',
      a1: {
        component: 'Scorecard',
        name: 'Messages',
        metric: { eql: 'count(distinct message_id)' }
      },
      a2: {
        component: 'Scorecard',
        name: 'Sent',
        metric: { eql: 'sum(sent)' }
      },
      a3: {
        component: 'Scorecard',
        name: 'Open Rate',
        metric: { eql: 'sum(impressions)/sum(sent)', format: 'percent' }
      },
      a4: {
        component: 'Scorecard',
        name: 'Click Rate',
        metric: { eql: 'sum(clicks)/sum(sent)', format: 'percent' }
      },
      a6: {
        component: 'Scorecard',
        name: 'Transactions',
        metrics: [{ eql: 'sum(attributed_revenue)', format: 'currency' }, { eql: 'sum(attributed_transactions)' }]
      },
      a7: {
        component: 'Scorecard',
        name: 'Average Gift',
        metric: { eql: 'sum(attributed_revenue)/sum(attributed_transactions)', format: 'currency' }
      },
      bTitle: 'Amount over time',
      b1: {
        component: 'ComposedChart',
        isDate: true,
        dimension: { eql: 'week(publish_date)' },
        metrics: [
          {
            name: 'Total Amount',
            eql: 'sum(attributed_revenue)',
            yaxis: 'right',
            type: 'bar',
            format: 'currency'
          },
          { name: 'Emails Sent', eql: 'sum(sent)' }
        ],
        sort: { eql: 'week(publish_date)' }
      },
      cTitle: 'Email Rates',
      c1: {
        component: 'ComposedChart',
        isDate: true,
        dimension: { eql: 'publish_date' },
        metrics: [
          { name: 'Open Rate', eql: 'sum(impressions)/sum(sent)', format: 'percent' },
          {
            name: 'Click Rate',
            eql: 'sum(clicks)/sum(sent)',
            format: 'percent',
            yaxis: 'right'
          }
        ],
        sort: { eql: 'publish_date' }
      },
      dTitle: 'Revenue Performance Over Time',
      d1: {
        component: 'ComposedChart',
        isDate: true,
        dimension: { eql: 'publish_date' },
        metrics: [{ name: '$ Revenue/Click', eql: 'sum(attributed_revenue)/sum(clicks)', format: 'currency' }],
        sort: { eql: 'publish_date' }
      },
      eTitle: 'Performance Metrics',
      e1: {
        component: 'FraktureReportTable',
        dimensions: [
          { name: 'Send Date', eql: 'publish_date' },
          { name: 'Subject', eql: 'subject', col: 2 },
          { name: 'Source Code', eql: 'final_primary_source_code', col: 2 }
        ],
        metrics: [
          { name: 'Sent', eql: 'sent', format: 'number' },
          { name: 'Open Rate', eql: 'impressions/sent', format: 'percent' },
          { name: 'Click Rate', eql: 'clicks/sent', format: 'percent' },
          { name: 'Transactions', eql: 'sum(attributed_transactions)' },
          { name: 'Transactions/Opens', eql: 'sum(attributed_transactions)/sum(impressions)', format: 'percent' },
          { name: 'Revenue', eql: 'sum(attributed_revenue)', format: 'currency' },
          { name: 'Average', eql: 'sum(attributed_revenue)/sum(attributed_transactions)', format: 'currency' },
          { name: 'Revenue/Click', eql: 'sum(attributed_revenue)/sum(clicks)', format: 'currency' }
        ],
        order_by: { eql: 'publish_date', order_by_direction: 'DESC' }
      }
    }
  };
}
export default o;
