{
  const o = {
    data_sources: {
      default: {
        table: 'global_message_summary',
        date_field: 'publish_date',
        conditions: [{ eql: "channel='email' and publish_date is not null" }],
      },
    },
    scope: 'global',
    name: 'Email Engagement',
    description: 'Key performance stats including send count, open & click rates, and unsubscribes.',
    tags: ['Email'],
    subcategory: 'Email',
    components: {
      aTitle: 'Email Key Metrics',
      a1: {
        component: 'Scorecard',
        name: 'Messages',
        metric: { eql: 'count(distinct message_id)' },
      },
      a2: {
        component: 'Scorecard',
        name: 'Total Sent',
        metric: { eql: 'sum(sent)' },
      },
      a3: {
        component: 'Scorecard',
        name: 'Open Rate',
        metrics: [
          { eql: 'sum(impressions)/sum(sent)', format: 'percent' },
          { eql: 'sum(impressions)' },
        ],
      },
      a4: {
        component: 'Scorecard',
        name: 'Click Rate',
        metrics: [{ eql: 'sum(clicks)/sum(sent)', format: 'percent' }, { eql: 'sum(clicks)' }],
      },
      a5: {
        component: 'Scorecard',
        name: 'Unsubscribes',
        metrics: [{ eql: 'sum(unsubscribes)' },
        ],
      },
      a6: {
        component: 'Scorecard',
        name: 'Bounces',
        metrics: [{ eql: 'sum(soft_bounces+hard_bounces)' }],
      },
      bTitle: 'Opens and Clicks By Date',
      b1: {
        component: 'ComposedChart',
        isDate: true,
        dimension: { eql: 'publish_date' },
        metrics: [
          { name: 'Opened', eql: 'sum(impressions)', yaxis: 'right' },
          { name: 'Clicked', eql: 'sum(clicks)', yaxis: 'left' },
        ],
        sort: { eql: 'publish_date' },
      },
      cTitle: 'Message Details',
      c1: {
        component: 'FraktureReportTable',
        metrics: [
          { name: 'Subject', eql: 'subject', col: 0 },
          { name: 'Message', eql: 'label', col: 0 },
          { name: 'Source Code', eql: 'final_primary_source_code', col: 0 },
          {
            name: 'Send Date', eql: 'publish_date', col: 1, format: 'date',
          },
          {
            name: 'Total Sent', eql: 'sent', col: 2, format: 'number',
          },
          {
            name: 'Open Rate', eql: 'impressions/sent', format: 'percent', col: 3,
          },
          { name: 'Opened', eql: 'impressions', col: 3 },
          {
            name: 'Click Rate', eql: 'clicks/sent', format: 'percent', col: 4,
          },
          { name: 'Clicked', eql: 'clicks', col: 4 },
          {
            name: 'Unsub Rate', eql: 'unsubscribes/sent', format: 'percent', col: 5,
          },
          { name: 'Unsubscribed', eql: 'unsubscribes', col: 5 },
          {
            name: 'Bounce Rate', eql: 'soft_bounces+hard_bounces/sent', format: 'percent', col: 6,
          },
          { name: 'Bounces', eql: 'soft_bounces+hard_bounces', col: 6 },
        ],
        orderBy: { eql: 'publish_date', orderBy_direction: 'DESC' },
      },
      d1: {
        component: 'FraktureReportTable',
        name: 'Campaign Summary',
        dimensions: [
          { name: 'Campaign', eql: 'campaign_name' },
        ],
        metrics: [
          { name: 'Total Sent', eql: 'sum(sent)' },
          { name: 'Opened', eql: 'sum(impressions)' },
          { name: 'Open Rate', eql: 'sum(impressions)/sum(sent)', format: 'percent' },
          { name: 'Clicked', eql: 'sum(clicks)' },
          { name: 'Click Rate', eql: 'sum(clicks)/sum(sent)', format: 'percent' },
          { name: 'Unsubscribed', eql: 'sum(unsubscribes)' },
          { name: 'Unsub Rate', eql: 'sum(unsubscribes)/sum(sent)', format: 'percent' },
          { name: 'Bounces', eql: 'sum(soft_bounces+hard_bounces)' },
          { name: 'Bounce Rate', eql: 'sum(soft_bounces+hard_bounces)/sum(sent)', format: 'percent' },
        ],
      },
    },
  };
  module.exports = o;
}
