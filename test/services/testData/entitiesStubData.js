// example of entities response returned by the postgREST API wrapper
const entitiesResponse = {
  paths: {
    '/activities': {
      get: {
        tags: ['activities'],
        summary: '{"description": "Work related activities", "schemalastupdated": "14/03/2019", "dataversion": 1}',
        parameters: [
          {
            '$ref': '#/parameters/rowFilter.activities.id'
          },
          {
            '$ref': '#/parameters/rowFilter.activities.activity'
          },
          {
            '$ref': '#/parameters/rowFilter.activities.activitytypeid'
          },
          {
            '$ref': '#/parameters/select'
          },
          {
            '$ref': '#/parameters/order'
          },
          {
            '$ref': '#/parameters/range'
          },
          {
            '$ref': '#/parameters/rangeUnit'
          },
          {
            '$ref': '#/parameters/offset'
          },
          {
            '$ref': '#/parameters/limit'
          },
          {
            '$ref': '#/parameters/preferCount'
          }
        ],
        responses: {
          '200': {
            schema: {
              items: {
                '$ref': '#/definitions/activities'
              },
              type: 'array'
            },
            description: 'OK'
          },
          '206': {
            description: 'Partial Content'
          }
        }
      },
      post: {
        tags: ['activities'],
        summary: '{"description": "Work related activities", "schemalastupdated": "14/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.activities'
          },
          {
            '$ref': '#/parameters/preferReturn'
          }
        ],
        responses: {
          '201': {
            description: 'Created'
          }
        }
      },
      delete: {
        tags: ['activities'],
        summary: '{"description": "Work related activities", "schemalastupdated": "14/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.activities.id'
          },
          {
            '$ref': '#/parameters/rowFilter.activities.activity'
          },
          {
            '$ref': '#/parameters/rowFilter.activities.activitytypeid'
          },
          {
            '$ref': '#/parameters/preferReturn'
          }
        ],
        responses: {
          '204': {
            description: 'No Content'
          }
        }
      },
      patch: {
        tags: ['activities'],
        summary: '{"description": "Work related activities", "schemalastupdated": "14/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.activities.id'
          },
          {
            '$ref': '#/parameters/rowFilter.activities.activity'
          },
          {
            '$ref': '#/parameters/rowFilter.activities.activitytypeid'
          },
          {
            '$ref': '#/parameters/body.activities'
          },
          {
            '$ref': '#/parameters/preferReturn'
          }
        ],
        responses: {
          '204': {
            description: 'No Content'
          }
        }
      }
    },
    '/activitytype': {
      get: {
        tags: ['activitytype'],
        summary: '{"description": "Activity type clarification", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [
          {
            '$ref': '#/parameters/rowFilter.activitytype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.activitytype.type'
          },
          {
            '$ref': '#/parameters/select'
          },
          {
            '$ref': '#/parameters/order'
          },
          {
            '$ref': '#/parameters/range'
          },
          {
            '$ref': '#/parameters/rangeUnit'
          },
          {
            '$ref': '#/parameters/offset'
          },
          {
            '$ref': '#/parameters/limit'
          },
          {
            '$ref': '#/parameters/preferCount'
          }
        ],
        responses: {
          '200': {
            schema: {
              items: {
                '$ref': '#/definitions/activitytype'
              },
              type: 'array'
            },
            description: 'OK'
          },
          '206': {
            description: 'Partial Content'
          }
        }
      },
      post: {
        tags: ['activitytype'],
        summary: '{"description": "Activity type clarification", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [
          {
            '$ref': '#/parameters/body.activitytype'
          },
          {
            '$ref': '#/parameters/preferReturn'
          }
        ],
        responses: {
          '201': {
            description: 'Created'
          }
        }
      },
      delete: {
        tags: ['activitytype'],
        summary: '{"description": "Activity type clarification", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [
          {
            '$ref': '#/parameters/rowFilter.activitytype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.activitytype.type'
          },
          {
            '$ref': '#/parameters/preferReturn'
          }
        ],
        responses: {
          '204': {
            description: 'No Content'
          }
        }
      },
      patch: {
        tags: ['activitytype'],
        summary: '{"description": "Activity type clarification", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [
          {
            '$ref': '#/parameters/rowFilter.activitytype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.activitytype.type'
          },
          {
            '$ref': '#/parameters/body.activitytype'
          },
          {
            '$ref': '#/parameters/preferReturn'
          }
        ],
        responses: {
          '204': {
            description: 'No Content'
          }
        }
      }
    }
  },
  definitions: {
    activities: {
      description: '{"description": "Work related activities", "schemalastupdated": "14/03/2019", "dataversion": 1}',
      required: ['id', 'activity', 'activitytypeid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        activity: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Activity", "description": "Activity descriptiopn", "summaryview": "true"}'
        },
        activitytypeid: {
          format: "integer",
          type: "integer",
          description: "Note:\nThis is a Foreign Key to `activities.id`.<fk table=\'activities\' column=\'id\'/>"
        }
      },
      type: 'object'
    },
    activitytype: {
      description: '{"description": "Activity type clarification", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Activity type", "description": "Type description", "summaryview": "true"}'
        }
      },
      type: 'object'
    }
  }
};
// example of formatted data to be returned by the API
const entitiesFormattedData = {
  status: null,
  code: 200,
  data: [
    {
      description: 'Work related activities',
      dataversion: 1,
      entityName: 'activities',
      label: '',
      schema: {
        description: '{"description": "Work related activities", "schemalastupdated": "14/03/2019", "dataversion": 1}',
        required: [ 'id', 'activity', 'activitytypeid' ],
        properties: {
          id: {
            format: 'integer',
            type: 'integer',
            description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
          },
          activity: {
            maxLength: 40,
            format: 'character varying',
            type: 'string',
            description: '{"label": "Activity", "description": "Activity descriptiopn", "summaryview": "true"}'
          },
          activitytypeid: {
            format: 'integer',
            type: 'integer',
            description: 'Note:\nThis is a Foreign Key to `activities.id`.<fk table=\'activities\' column=\'id\'/>'
          }
        }
      },
      lastupdated: '14/03/2019'
    },
    {
      description: 'Activity type clarification',
      dataversion: 1,
      entityName: 'activitytype',
      label: '',
      schema: {
        description: '{"description": "Activity type clarification", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        required: [ 'id' ],
        properties: {
          id: {
            format: 'integer',
            type: 'integer',
            description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
          },
          type: {
            maxLength: 20,
            format: 'character varying',
            type: 'string',
            description: '{"label": "Activity type", "description": "Type description", "summaryview": "true"}'
          }
        }
      },
      lastupdated: '06/03/2019'
    }
  ]
};
// example of entity response returned by the postgREST API wrapper
const entityResponse = [];
// example of formatted data to be returned by the API
const entityFormattedData = {
  code: 200,
  status: null,
  entityName: 'activities',
  entityLabel: '',
  entitySchema: {
    description: {
      description: 'Work related activities',
      dataversion: 1,
      lastupdated: '14/03/2019'
    },
    required: ['id', 'activity', 'activitytypeid'],
    properties: {
      id: {
        format: 'integer',
        type: 'integer',
        description: {
          label: 'Identifier',
          description: 'Unique identifying column',
          summaryview: 'false'
        }
      },
      activity: {
        maxLength: 40,
        format: 'character varying',
        type: 'string',
        description: {
          label: 'Activity',
          description: 'Activity descriptiopn',
          summaryview: 'true'
        }
      },
      activitytypeid: {
        format: 'integer',
        type: 'integer',
        description: 'Note:\nThis is a Foreign Key to `activities.id`.<fk table=\'activities\' column=\'id\'/>'
      }
    }
  },
  data: []
}

module.exports = {
  entitiesFormattedData,
  entitiesResponse,
  entityFormattedData,
  entityResponse,
};
