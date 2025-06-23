module.exports = {
  segment: {
    form: {
      segments: {
        title: 'Segments',
        type: 'object',
        properties: {
          segmentId: {
            type: 'string',
          },
        },
        required: [

        ],
      },
    },
    /* map from provided user data into an EQL structure */
    optionsToEQL(options) {
      const { segmentId } = options;
      const conditions = [];
      if (segmentId) {
        conditions.push({
          type: 'EQUALS',
          values: [{
            ref: { column: 'segment_id' },
          }, {
            value: { value: segmentId },
          }],
        });
      }
      return {
        table: 'person_segment',
        conditions,
      };
    },
  },
};
