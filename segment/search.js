module.exports = {
  segment: {
    form: {
      segments: {
        title: 'Segment',
        type: 'object',
        properties: {
          segmentId: {
            title: 'Segment',
            description: '',
            type: 'string'
          }
        },
        required: []
      }
    },
    /* map from provided user data into an EQL structure */
    optionsToEQL(options) {
      const { segmentId } = options;

      let text = ' segment ' + segmentId;
      const conditions = [
        {
          type: 'EQUALS',
          values: [
            {
              ref: { column: 'segment_id' }
            },
            {
              value: { value: segmentId }
            }
          ]
        }
      ];

      const eql = {
        table: 'person_segment',
        conditions
      };

      return { text, eql };
    }
  }
};
