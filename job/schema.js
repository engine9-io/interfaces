module.exports = {
  tables: [
    {
      name: 'job',
      columns: {
        id: 'id',
        employment_type: {
          type: 'string',
          values: ['Full-time',
            'Part-time',
            'Contractor',
            'Internship',
          ],
          description: 'Employment type, e.g. Full-time, part time, etc',
        },
        title: 'string',
        salary_min: 'decimal',
        salary_max: 'decimal',
        salary_interval: 'string',

        is_remote: {
          type: 'string',
          description: '// Yes or No or Other of Sometimes, etc',
        },
        deadline: 'datetime',
        employer_name: 'string',
        employer_domain: 'string',

        small_description: 'string',
        url: 'url',
        location_name: 'string',
        application_instructions: 'text',
        description: 'text',
        html_description: 'text',
        date_posted: 'datetime',
        job_post_status: {
          type: 'string',
          values: [
            'Open',
          ],
        },
        date_created: 'date_created',
        last_modified: 'last_modified',
      },
      indexes: [
      ],
    },
  ],
};
