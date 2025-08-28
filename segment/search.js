module.exports = {
  segment: {
    form: {
      segments: {
        title: 'Segment',
        type: 'object',
        properties: {
          exclude: {
            title: 'In/Not In',
            description: '',
            type: 'string',
            enum: ['Is in segment', 'Is not in segment']
          },
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
      const { exclude, segmentId } = options;
      const conditions = [];
      let text = '';
      if (segmentId) {
        text = ' segment ' + segmentId;
        conditions.push({
          type: 'EQUALS',
          values: [
            {
              ref: { column: 'segment_id' }
            },
            {
              value: { value: segmentId }
            }
          ]
        });
      }
      const eql = {
        table: 'person_segment',
        conditions
      };
      if (exclude === 'Is not in segment') {
        text = 'Is not in ';
        o.exclude = true;
      } else {
        text = 'Is in ';
      }
      return { text, eql };
    }
  }
};
