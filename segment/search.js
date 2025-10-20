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
    optionsToEQLContext: function ({ segmentId }) {
      return {
        segments: {
          table: 'segment',
          columns: ['id', 'name'],
          conditions: [
            {
              type: 'EQUALS',
              values: [
                {
                  ref: { column: 'id' }
                },
                {
                  value: { value: segmentId }
                }
              ]
            }
          ]
        }
      };
    },
    /* map from provided user data into an EQL structure */
    optionsToEQL(options, { segments } = {}) {
      const { segmentId } = options;

      let text = 'In ' + segments.find(({ id }) => id == segmentId)?.name || segmentId;
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
