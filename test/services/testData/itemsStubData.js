// example of entities response returned by the postgREST API wrapper
const entitiesResponse = {
  paths: {
    '/': {
      get: {
        tags: ['Introspection'],
        summary: 'OpenAPI description (this document)',
        produces: ['application/openapi+json', 'application/json'],
        responses: {
          '200': {
            description: 'OK'
          }
        }
      }
    },
    '/activities': {
      get: {
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
        parameters: [{
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
        parameters: [{
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
        parameters: [{
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
        parameters: [{
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
    },
    '/address': {
      get: {
        tags: ['address'],
        summary: '{"description": "Address list for location", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.address.id'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line1'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line2'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line3'
          },
          {
            '$ref': '#/parameters/rowFilter.address.city'
          },
          {
            '$ref': '#/parameters/rowFilter.address.geographicregionid'
          },
          {
            '$ref': '#/parameters/rowFilter.address.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.address.postcode'
          },
          {
            '$ref': '#/parameters/rowFilter.address.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.address.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.address.validto'
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
                '$ref': '#/definitions/address'
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
        tags: ['address'],
        summary: '{"description": "Address list for location", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.address'
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
        tags: ['address'],
        summary: '{"description": "Address list for location", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.address.id'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line1'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line2'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line3'
          },
          {
            '$ref': '#/parameters/rowFilter.address.city'
          },
          {
            '$ref': '#/parameters/rowFilter.address.geographicregionid'
          },
          {
            '$ref': '#/parameters/rowFilter.address.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.address.postcode'
          },
          {
            '$ref': '#/parameters/rowFilter.address.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.address.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.address.validto'
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
        tags: ['address'],
        summary: '{"description": "Address list for location", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.address.id'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line1'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line2'
          },
          {
            '$ref': '#/parameters/rowFilter.address.line3'
          },
          {
            '$ref': '#/parameters/rowFilter.address.city'
          },
          {
            '$ref': '#/parameters/rowFilter.address.geographicregionid'
          },
          {
            '$ref': '#/parameters/rowFilter.address.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.address.postcode'
          },
          {
            '$ref': '#/parameters/rowFilter.address.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.address.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.address.validto'
          },
          {
            '$ref': '#/parameters/body.address'
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
    '/bffunctiontypes': {
      get: {
        tags: ['bffunctiontypes'],
        summary: '{"description": "Border functions type clarifications", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.bffunctiontypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.bffunctiontypes.bffunction'
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
                '$ref': '#/definitions/bffunctiontypes'
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
        tags: ['bffunctiontypes'],
        summary: '{"description": "Border functions type clarifications", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.bffunctiontypes'
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
        tags: ['bffunctiontypes'],
        summary: '{"description": "Border functions type clarifications", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.bffunctiontypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.bffunctiontypes.bffunction'
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
        tags: ['bffunctiontypes'],
        summary: '{"description": "Border functions type clarifications", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.bffunctiontypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.bffunctiontypes.bffunction'
          },
          {
            '$ref': '#/parameters/body.bffunctiontypes'
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
    '/branch': {
      get: {
        tags: ['branch'],
        summary: '{"description": "Branch or Region names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.branch.id'
          },
          {
            '$ref': '#/parameters/rowFilter.branch.name'
          },
          {
            '$ref': '#/parameters/rowFilter.branch.directorateid'
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
                '$ref': '#/definitions/branch'
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
        tags: ['branch'],
        summary: '{"description": "Branch or Region names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.branch'
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
        tags: ['branch'],
        summary: '{"description": "Branch or Region names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.branch.id'
          },
          {
            '$ref': '#/parameters/rowFilter.branch.name'
          },
          {
            '$ref': '#/parameters/rowFilter.branch.directorateid'
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
        tags: ['branch'],
        summary: '{"description": "Branch or Region names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.branch.id'
          },
          {
            '$ref': '#/parameters/rowFilter.branch.name'
          },
          {
            '$ref': '#/parameters/rowFilter.branch.directorateid'
          },
          {
            '$ref': '#/parameters/body.branch'
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
    '/carrierlist': {
      get: {
        tags: ['carrierlist'],
        summary: '{"description": "List of Carriers", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.carrierlist.id'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.name'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.twolettercode'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.designator'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.alliance'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.aviation'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.maritime'
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
                '$ref': '#/definitions/carrierlist'
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
        tags: ['carrierlist'],
        summary: '{"description": "List of Carriers", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.carrierlist'
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
        tags: ['carrierlist'],
        summary: '{"description": "List of Carriers", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.carrierlist.id'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.name'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.twolettercode'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.designator'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.alliance'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.aviation'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.maritime'
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
        tags: ['carrierlist'],
        summary: '{"description": "List of Carriers", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.carrierlist.id'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.name'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.twolettercode'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.designator'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.alliance'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.aviation'
          },
          {
            '$ref': '#/parameters/rowFilter.carrierlist.maritime'
          },
          {
            '$ref': '#/parameters/body.carrierlist'
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
    '/command': {
      get: {
        tags: ['command'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.command.id'
          },
          {
            '$ref': '#/parameters/rowFilter.command.name'
          },
          {
            '$ref': '#/parameters/rowFilter.command.divisionid'
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
                '$ref': '#/definitions/command'
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
        tags: ['command'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.command'
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
        tags: ['command'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.command.id'
          },
          {
            '$ref': '#/parameters/rowFilter.command.name'
          },
          {
            '$ref': '#/parameters/rowFilter.command.divisionid'
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
        tags: ['command'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.command.id'
          },
          {
            '$ref': '#/parameters/rowFilter.command.name'
          },
          {
            '$ref': '#/parameters/rowFilter.command.divisionid'
          },
          {
            '$ref': '#/parameters/body.command'
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
    '/competence': {
      get: {
        tags: ['competence'],
        summary: '{"description": "Competence states", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.competence.id'
          },
          {
            '$ref': '#/parameters/rowFilter.competence.description'
          },
          {
            '$ref': '#/parameters/rowFilter.competence.competence'
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
                '$ref': '#/definitions/competence'
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
        tags: ['competence'],
        summary: '{"description": "Competence states", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.competence'
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
        tags: ['competence'],
        summary: '{"description": "Competence states", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.competence.id'
          },
          {
            '$ref': '#/parameters/rowFilter.competence.description'
          },
          {
            '$ref': '#/parameters/rowFilter.competence.competence'
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
        tags: ['competence'],
        summary: '{"description": "Competence states", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.competence.id'
          },
          {
            '$ref': '#/parameters/rowFilter.competence.description'
          },
          {
            '$ref': '#/parameters/rowFilter.competence.competence'
          },
          {
            '$ref': '#/parameters/body.competence'
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
    '/country': {
      get: {
        tags: ['country'],
        summary: '{"description": "Countries", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.country.id'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661alpha3'
          },
          {
            '$ref': '#/parameters/rowFilter.country.name'
          },
          {
            '$ref': '#/parameters/rowFilter.country.continent'
          },
          {
            '$ref': '#/parameters/rowFilter.country.dial'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661numeric'
          },
          {
            '$ref': '#/parameters/rowFilter.country.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.country.validto'
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
                '$ref': '#/definitions/country'
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
        tags: ['country'],
        summary: '{"description": "Countries", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.country'
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
        tags: ['country'],
        summary: '{"description": "Countries", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.country.id'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661alpha3'
          },
          {
            '$ref': '#/parameters/rowFilter.country.name'
          },
          {
            '$ref': '#/parameters/rowFilter.country.continent'
          },
          {
            '$ref': '#/parameters/rowFilter.country.dial'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661numeric'
          },
          {
            '$ref': '#/parameters/rowFilter.country.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.country.validto'
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
        tags: ['country'],
        summary: '{"description": "Countries", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.country.id'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661alpha3'
          },
          {
            '$ref': '#/parameters/rowFilter.country.name'
          },
          {
            '$ref': '#/parameters/rowFilter.country.continent'
          },
          {
            '$ref': '#/parameters/rowFilter.country.dial'
          },
          {
            '$ref': '#/parameters/rowFilter.country.iso31661numeric'
          },
          {
            '$ref': '#/parameters/rowFilter.country.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.country.validto'
          },
          {
            '$ref': '#/parameters/body.country'
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
    '/crewrole': {
      get: {
        tags: ['crewrole'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.crewrole.id'
          },
          {
            '$ref': '#/parameters/rowFilter.crewrole.name'
          },
          {
            '$ref': '#/parameters/rowFilter.crewrole.description'
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
                '$ref': '#/definitions/crewrole'
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
        tags: ['crewrole'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.crewrole'
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
        tags: ['crewrole'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.crewrole.id'
          },
          {
            '$ref': '#/parameters/rowFilter.crewrole.name'
          },
          {
            '$ref': '#/parameters/rowFilter.crewrole.description'
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
        tags: ['crewrole'],
        summary: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.crewrole.id'
          },
          {
            '$ref': '#/parameters/rowFilter.crewrole.name'
          },
          {
            '$ref': '#/parameters/rowFilter.crewrole.description'
          },
          {
            '$ref': '#/parameters/body.crewrole'
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
    '/criminalrecordtype': {
      get: {
        tags: ['criminalrecordtype'],
        summary: '{"description": "Criminal record type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.criminalrecordtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.criminalrecordtype.recordname'
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
                '$ref': '#/definitions/criminalrecordtype'
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
        tags: ['criminalrecordtype'],
        summary: '{"description": "Criminal record type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.criminalrecordtype'
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
        tags: ['criminalrecordtype'],
        summary: '{"description": "Criminal record type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.criminalrecordtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.criminalrecordtype.recordname'
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
        tags: ['criminalrecordtype'],
        summary: '{"description": "Criminal record type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.criminalrecordtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.criminalrecordtype.recordname'
          },
          {
            '$ref': '#/parameters/body.criminalrecordtype'
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
    '/currency': {
      get: {
        tags: ['currency'],
        summary: '{"description": "Currencies", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.currency.id'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.currency'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.currencycode'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.validto'
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
                '$ref': '#/definitions/currency'
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
        tags: ['currency'],
        summary: '{"description": "Currencies", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.currency'
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
        tags: ['currency'],
        summary: '{"description": "Currencies", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.currency.id'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.currency'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.currencycode'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.validto'
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
        tags: ['currency'],
        summary: '{"description": "Currencies", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.currency.id'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.currency'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.currencycode'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.currency.validto'
          },
          {
            '$ref': '#/parameters/body.currency'
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
    '/department': {
      get: {
        tags: ['department'],
        summary: '{"description": "Department names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.department.id'
          },
          {
            '$ref': '#/parameters/rowFilter.department.name'
          },
          {
            '$ref': '#/parameters/rowFilter.department.ministryid'
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
                '$ref': '#/definitions/department'
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
        tags: ['department'],
        summary: '{"description": "Department names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.department'
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
        tags: ['department'],
        summary: '{"description": "Department names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.department.id'
          },
          {
            '$ref': '#/parameters/rowFilter.department.name'
          },
          {
            '$ref': '#/parameters/rowFilter.department.ministryid'
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
        tags: ['department'],
        summary: '{"description": "Department names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.department.id'
          },
          {
            '$ref': '#/parameters/rowFilter.department.name'
          },
          {
            '$ref': '#/parameters/rowFilter.department.ministryid'
          },
          {
            '$ref': '#/parameters/body.department'
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
    '/directorate': {
      get: {
        tags: ['directorate'],
        summary: '{"description": "Directorate names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.directorate.id'
          },
          {
            '$ref': '#/parameters/rowFilter.directorate.name'
          },
          {
            '$ref': '#/parameters/rowFilter.directorate.departmentid'
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
                '$ref': '#/definitions/directorate'
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
        tags: ['directorate'],
        summary: '{"description": "Directorate names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.directorate'
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
        tags: ['directorate'],
        summary: '{"description": "Directorate names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.directorate.id'
          },
          {
            '$ref': '#/parameters/rowFilter.directorate.name'
          },
          {
            '$ref': '#/parameters/rowFilter.directorate.departmentid'
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
        tags: ['directorate'],
        summary: '{"description": "Directorate names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.directorate.id'
          },
          {
            '$ref': '#/parameters/rowFilter.directorate.name'
          },
          {
            '$ref': '#/parameters/rowFilter.directorate.departmentid'
          },
          {
            '$ref': '#/parameters/body.directorate'
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
    '/division': {
      get: {
        tags: ['division'],
        summary: '{"description": "Division", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.division.id'
          },
          {
            '$ref': '#/parameters/rowFilter.division.name'
          },
          {
            '$ref': '#/parameters/rowFilter.division.branchid'
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
                '$ref': '#/definitions/division'
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
        tags: ['division'],
        summary: '{"description": "Division", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.division'
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
        tags: ['division'],
        summary: '{"description": "Division", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.division.id'
          },
          {
            '$ref': '#/parameters/rowFilter.division.name'
          },
          {
            '$ref': '#/parameters/rowFilter.division.branchid'
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
        tags: ['division'],
        summary: '{"description": "Division", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.division.id'
          },
          {
            '$ref': '#/parameters/rowFilter.division.name'
          },
          {
            '$ref': '#/parameters/rowFilter.division.branchid'
          },
          {
            '$ref': '#/parameters/body.division'
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
    '/documenttype': {
      get: {
        tags: ['documenttype'],
        summary: '{"description": "Identity document type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.documenttype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.code'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.shortdescription'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.longdescription'
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
                '$ref': '#/definitions/documenttype'
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
        tags: ['documenttype'],
        summary: '{"description": "Identity document type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.documenttype'
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
        tags: ['documenttype'],
        summary: '{"description": "Identity document type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.documenttype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.code'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.shortdescription'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.longdescription'
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
        tags: ['documenttype'],
        summary: '{"description": "Identity document type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.documenttype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.code'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.shortdescription'
          },
          {
            '$ref': '#/parameters/rowFilter.documenttype.longdescription'
          },
          {
            '$ref': '#/parameters/body.documenttype'
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
    '/dogrole': {
      get: {
        tags: ['dogrole'],
        summary: '{"description": "Dog roles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.dogrole.id'
          },
          {
            '$ref': '#/parameters/rowFilter.dogrole.code'
          },
          {
            '$ref': '#/parameters/rowFilter.dogrole.description'
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
                '$ref': '#/definitions/dogrole'
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
        tags: ['dogrole'],
        summary: '{"description": "Dog roles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.dogrole'
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
        tags: ['dogrole'],
        summary: '{"description": "Dog roles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.dogrole.id'
          },
          {
            '$ref': '#/parameters/rowFilter.dogrole.code'
          },
          {
            '$ref': '#/parameters/rowFilter.dogrole.description'
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
        tags: ['dogrole'],
        summary: '{"description": "Dog roles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.dogrole.id'
          },
          {
            '$ref': '#/parameters/rowFilter.dogrole.code'
          },
          {
            '$ref': '#/parameters/rowFilter.dogrole.description'
          },
          {
            '$ref': '#/parameters/body.dogrole'
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
    '/employmenttypes': {
      get: {
        tags: ['employmenttypes'],
        summary: '{"description": "Employment types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.employmenttypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.employmenttypes.name'
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
                '$ref': '#/definitions/employmenttypes'
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
        tags: ['employmenttypes'],
        summary: '{"description": "Employment types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.employmenttypes'
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
        tags: ['employmenttypes'],
        summary: '{"description": "Employment types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.employmenttypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.employmenttypes.name'
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
        tags: ['employmenttypes'],
        summary: '{"description": "Employment types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.employmenttypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.employmenttypes.name'
          },
          {
            '$ref': '#/parameters/body.employmenttypes'
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
    '/errorcodes': {
      get: {
        tags: ['errorcodes'],
        summary: '{"description": "Error messages", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.errorcodes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.errorcodes.message'
          },
          {
            '$ref': '#/parameters/rowFilter.errorcodes.description'
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
                '$ref': '#/definitions/errorcodes'
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
        tags: ['errorcodes'],
        summary: '{"description": "Error messages", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.errorcodes'
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
        tags: ['errorcodes'],
        summary: '{"description": "Error messages", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.errorcodes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.errorcodes.message'
          },
          {
            '$ref': '#/parameters/rowFilter.errorcodes.description'
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
        tags: ['errorcodes'],
        summary: '{"description": "Error messages", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.errorcodes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.errorcodes.message'
          },
          {
            '$ref': '#/parameters/rowFilter.errorcodes.description'
          },
          {
            '$ref': '#/parameters/body.errorcodes'
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
    '/ethnicity': {
      get: {
        tags: ['ethnicity'],
        summary: '{"description": "Ethnicity breakdowns", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.ethnicity.id'
          },
          {
            '$ref': '#/parameters/rowFilter.ethnicity.ethnicity'
          },
          {
            '$ref': '#/parameters/rowFilter.ethnicity.subethnicity'
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
                '$ref': '#/definitions/ethnicity'
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
        tags: ['ethnicity'],
        summary: '{"description": "Ethnicity breakdowns", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.ethnicity'
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
        tags: ['ethnicity'],
        summary: '{"description": "Ethnicity breakdowns", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.ethnicity.id'
          },
          {
            '$ref': '#/parameters/rowFilter.ethnicity.ethnicity'
          },
          {
            '$ref': '#/parameters/rowFilter.ethnicity.subethnicity'
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
        tags: ['ethnicity'],
        summary: '{"description": "Ethnicity breakdowns", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.ethnicity.id'
          },
          {
            '$ref': '#/parameters/rowFilter.ethnicity.ethnicity'
          },
          {
            '$ref': '#/parameters/rowFilter.ethnicity.subethnicity'
          },
          {
            '$ref': '#/parameters/body.ethnicity'
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
    '/eventpeopletype': {
      get: {
        tags: ['eventpeopletype'],
        summary: '{"description": "Types of people in an event", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventpeopletype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventpeopletype.type'
          },
          {
            '$ref': '#/parameters/rowFilter.eventpeopletype.description'
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
                '$ref': '#/definitions/eventpeopletype'
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
        tags: ['eventpeopletype'],
        summary: '{"description": "Types of people in an event", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.eventpeopletype'
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
        tags: ['eventpeopletype'],
        summary: '{"description": "Types of people in an event", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventpeopletype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventpeopletype.type'
          },
          {
            '$ref': '#/parameters/rowFilter.eventpeopletype.description'
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
        tags: ['eventpeopletype'],
        summary: '{"description": "Types of people in an event", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventpeopletype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventpeopletype.type'
          },
          {
            '$ref': '#/parameters/rowFilter.eventpeopletype.description'
          },
          {
            '$ref': '#/parameters/body.eventpeopletype'
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
    '/eventstatus': {
      get: {
        tags: ['eventstatus'],
        summary: '{"description": "Event statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventstatus.status'
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
                '$ref': '#/definitions/eventstatus'
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
        tags: ['eventstatus'],
        summary: '{"description": "Event statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.eventstatus'
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
        tags: ['eventstatus'],
        summary: '{"description": "Event statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventstatus.status'
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
        tags: ['eventstatus'],
        summary: '{"description": "Event statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventstatus.status'
          },
          {
            '$ref': '#/parameters/body.eventstatus'
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
    '/eventtype': {
      get: {
        tags: ['eventtype'],
        summary: '{"description": "Event types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventtype.type'
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
                '$ref': '#/definitions/eventtype'
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
        tags: ['eventtype'],
        summary: '{"description": "Event types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.eventtype'
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
        tags: ['eventtype'],
        summary: '{"description": "Event types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventtype.type'
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
        tags: ['eventtype'],
        summary: '{"description": "Event types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.eventtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.eventtype.type'
          },
          {
            '$ref': '#/parameters/body.eventtype'
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
    '/financialinstrument': {
      get: {
        tags: ['financialinstrument'],
        summary: '{"description": "Financial currency types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.financialinstrument.id'
          },
          {
            '$ref': '#/parameters/rowFilter.financialinstrument.type'
          },
          {
            '$ref': '#/parameters/rowFilter.financialinstrument.description'
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
                '$ref': '#/definitions/financialinstrument'
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
        tags: ['financialinstrument'],
        summary: '{"description": "Financial currency types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.financialinstrument'
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
        tags: ['financialinstrument'],
        summary: '{"description": "Financial currency types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.financialinstrument.id'
          },
          {
            '$ref': '#/parameters/rowFilter.financialinstrument.type'
          },
          {
            '$ref': '#/parameters/rowFilter.financialinstrument.description'
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
        tags: ['financialinstrument'],
        summary: '{"description": "Financial currency types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.financialinstrument.id'
          },
          {
            '$ref': '#/parameters/rowFilter.financialinstrument.type'
          },
          {
            '$ref': '#/parameters/rowFilter.financialinstrument.description'
          },
          {
            '$ref': '#/parameters/body.financialinstrument'
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
    '/gender': {
      get: {
        tags: ['gender'],
        summary: '{"description": "Self identifying gender lists", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.gender.id'
          },
          {
            '$ref': '#/parameters/rowFilter.gender.gender'
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
                '$ref': '#/definitions/gender'
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
        tags: ['gender'],
        summary: '{"description": "Self identifying gender lists", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.gender'
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
        tags: ['gender'],
        summary: '{"description": "Self identifying gender lists", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.gender.id'
          },
          {
            '$ref': '#/parameters/rowFilter.gender.gender'
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
        tags: ['gender'],
        summary: '{"description": "Self identifying gender lists", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.gender.id'
          },
          {
            '$ref': '#/parameters/rowFilter.gender.gender'
          },
          {
            '$ref': '#/parameters/body.gender'
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
    '/geographicregion': {
      get: {
        tags: ['geographicregion'],
        summary: '{"description": "Geographic regions", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.geographicregion.id'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.code'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.name'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.validto'
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
                '$ref': '#/definitions/geographicregion'
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
        tags: ['geographicregion'],
        summary: '{"description": "Geographic regions", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.geographicregion'
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
        tags: ['geographicregion'],
        summary: '{"description": "Geographic regions", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.geographicregion.id'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.code'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.name'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.validto'
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
        tags: ['geographicregion'],
        summary: '{"description": "Geographic regions", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.geographicregion.id'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.code'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.name'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.geographicregion.validto'
          },
          {
            '$ref': '#/parameters/body.geographicregion'
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
    '/goodtype': {
      get: {
        tags: ['goodtype'],
        summary: '{"description": "Customs and Seizure good type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.goodtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level1name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level2name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level3name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.controlstrategypriority'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.description'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.enforcedfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.enforcedto'
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
                '$ref': '#/definitions/goodtype'
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
        tags: ['goodtype'],
        summary: '{"description": "Customs and Seizure good type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.goodtype'
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
        tags: ['goodtype'],
        summary: '{"description": "Customs and Seizure good type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.goodtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level1name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level2name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level3name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.controlstrategypriority'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.description'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.enforcedfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.enforcedto'
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
        tags: ['goodtype'],
        summary: '{"description": "Customs and Seizure good type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.goodtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level1name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level2name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.level3name'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.controlstrategypriority'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.description'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.enforcedfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.goodtype.enforcedto'
          },
          {
            '$ref': '#/parameters/body.goodtype'
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
    '/grade': {
      get: {
        tags: ['grade'],
        summary: '{"description": "Civil service grades", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.grade.id'
          },
          {
            '$ref': '#/parameters/rowFilter.grade.name'
          },
          {
            '$ref': '#/parameters/rowFilter.grade.parentgradetypeid'
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
                '$ref': '#/definitions/grade'
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
        tags: ['grade'],
        summary: '{"description": "Civil service grades", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.grade'
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
        tags: ['grade'],
        summary: '{"description": "Civil service grades", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.grade.id'
          },
          {
            '$ref': '#/parameters/rowFilter.grade.name'
          },
          {
            '$ref': '#/parameters/rowFilter.grade.parentgradetypeid'
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
        tags: ['grade'],
        summary: '{"description": "Civil service grades", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.grade.id'
          },
          {
            '$ref': '#/parameters/rowFilter.grade.name'
          },
          {
            '$ref': '#/parameters/rowFilter.grade.parentgradetypeid'
          },
          {
            '$ref': '#/parameters/body.grade'
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
    '/icao': {
      get: {
        tags: ['icao'],
        summary: '{"description": "ICAO list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.icao.id'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.name'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.iata'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.municipality'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.icao'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.type'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.validto'
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
                '$ref': '#/definitions/icao'
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
        tags: ['icao'],
        summary: '{"description": "ICAO list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.icao'
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
        tags: ['icao'],
        summary: '{"description": "ICAO list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.icao.id'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.name'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.iata'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.municipality'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.icao'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.type'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.validto'
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
        tags: ['icao'],
        summary: '{"description": "ICAO list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.icao.id'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.name'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.iata'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.municipality'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.icao'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.type'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.icao.validto'
          },
          {
            '$ref': '#/parameters/body.icao'
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
    '/indicators': {
      get: {
        tags: ['indicators'],
        summary: '{"description": "Intelligence indicators", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.indicators.id'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.indicator'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.ct'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.ien'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.referral'
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
                '$ref': '#/definitions/indicators'
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
        tags: ['indicators'],
        summary: '{"description": "Intelligence indicators", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.indicators'
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
        tags: ['indicators'],
        summary: '{"description": "Intelligence indicators", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.indicators.id'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.indicator'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.ct'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.ien'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.referral'
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
        tags: ['indicators'],
        summary: '{"description": "Intelligence indicators", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.indicators.id'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.indicator'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.ct'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.ien'
          },
          {
            '$ref': '#/parameters/rowFilter.indicators.referral'
          },
          {
            '$ref': '#/parameters/body.indicators'
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
    '/legtypes': {
      get: {
        tags: ['legtypes'],
        summary: '{"description": "Mode of leg journey", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.legtypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.legtypes.description'
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
                '$ref': '#/definitions/legtypes'
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
        tags: ['legtypes'],
        summary: '{"description": "Mode of leg journey", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.legtypes'
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
        tags: ['legtypes'],
        summary: '{"description": "Mode of leg journey", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.legtypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.legtypes.description'
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
        tags: ['legtypes'],
        summary: '{"description": "Mode of leg journey", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.legtypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.legtypes.description'
          },
          {
            '$ref': '#/parameters/body.legtypes'
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
    '/location': {
      get: {
        tags: ['location'],
        summary: '{"description": "Location details", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.location.id'
          },
          {
            '$ref': '#/parameters/rowFilter.location.name'
          },
          {
            '$ref': '#/parameters/rowFilter.location.description'
          },
          {
            '$ref': '#/parameters/rowFilter.location.unlocodeid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.addressid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.location.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.location.icaoid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.bflocationtypeid'
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
                '$ref': '#/definitions/location'
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
        tags: ['location'],
        summary: '{"description": "Location details", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.location'
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
        tags: ['location'],
        summary: '{"description": "Location details", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.location.id'
          },
          {
            '$ref': '#/parameters/rowFilter.location.name'
          },
          {
            '$ref': '#/parameters/rowFilter.location.description'
          },
          {
            '$ref': '#/parameters/rowFilter.location.unlocodeid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.addressid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.location.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.location.icaoid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.bflocationtypeid'
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
        tags: ['location'],
        summary: '{"description": "Location details", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.location.id'
          },
          {
            '$ref': '#/parameters/rowFilter.location.name'
          },
          {
            '$ref': '#/parameters/rowFilter.location.description'
          },
          {
            '$ref': '#/parameters/rowFilter.location.unlocodeid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.addressid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.location.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.location.icaoid'
          },
          {
            '$ref': '#/parameters/rowFilter.location.bflocationtypeid'
          },
          {
            '$ref': '#/parameters/body.location'
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
    '/lockup': {
      get: {
        tags: ['lockup'],
        summary: '{"description": "Seizure lockup types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.lockup.id'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.name'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.description'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.lockuptypeid'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.locationid'
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
                '$ref': '#/definitions/lockup'
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
        tags: ['lockup'],
        summary: '{"description": "Seizure lockup types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.lockup'
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
        tags: ['lockup'],
        summary: '{"description": "Seizure lockup types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.lockup.id'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.name'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.description'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.lockuptypeid'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.locationid'
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
        tags: ['lockup'],
        summary: '{"description": "Seizure lockup types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.lockup.id'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.name'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.description'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.lockuptypeid'
          },
          {
            '$ref': '#/parameters/rowFilter.lockup.locationid'
          },
          {
            '$ref': '#/parameters/body.lockup'
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
    '/lockuptype': {
      get: {
        tags: ['lockuptype'],
        summary: '{"description": "Types of lockup", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.lockuptype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.lockuptype.code'
          },
          {
            '$ref': '#/parameters/rowFilter.lockuptype.name'
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
                '$ref': '#/definitions/lockuptype'
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
        tags: ['lockuptype'],
        summary: '{"description": "Types of lockup", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.lockuptype'
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
        tags: ['lockuptype'],
        summary: '{"description": "Types of lockup", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.lockuptype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.lockuptype.code'
          },
          {
            '$ref': '#/parameters/rowFilter.lockuptype.name'
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
        tags: ['lockuptype'],
        summary: '{"description": "Types of lockup", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.lockuptype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.lockuptype.code'
          },
          {
            '$ref': '#/parameters/rowFilter.lockuptype.name'
          },
          {
            '$ref': '#/parameters/body.lockuptype'
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
    '/marital': {
      get: {
        tags: ['marital'],
        summary: '{"description": "Marital statuses", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.marital.id'
          },
          {
            '$ref': '#/parameters/rowFilter.marital.code'
          },
          {
            '$ref': '#/parameters/rowFilter.marital.description'
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
                '$ref': '#/definitions/marital'
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
        tags: ['marital'],
        summary: '{"description": "Marital statuses", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.marital'
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
        tags: ['marital'],
        summary: '{"description": "Marital statuses", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.marital.id'
          },
          {
            '$ref': '#/parameters/rowFilter.marital.code'
          },
          {
            '$ref': '#/parameters/rowFilter.marital.description'
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
        tags: ['marital'],
        summary: '{"description": "Marital statuses", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.marital.id'
          },
          {
            '$ref': '#/parameters/rowFilter.marital.code'
          },
          {
            '$ref': '#/parameters/rowFilter.marital.description'
          },
          {
            '$ref': '#/parameters/body.marital'
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
    '/ministry': {
      get: {
        tags: ['ministry'],
        summary: '{"description": "Government ministries", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.ministry.id'
          },
          {
            '$ref': '#/parameters/rowFilter.ministry.name'
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
                '$ref': '#/definitions/ministry'
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
        tags: ['ministry'],
        summary: '{"description": "Government ministries", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.ministry'
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
        tags: ['ministry'],
        summary: '{"description": "Government ministries", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.ministry.id'
          },
          {
            '$ref': '#/parameters/rowFilter.ministry.name'
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
        tags: ['ministry'],
        summary: '{"description": "Government ministries", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.ministry.id'
          },
          {
            '$ref': '#/parameters/rowFilter.ministry.name'
          },
          {
            '$ref': '#/parameters/body.ministry'
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
    '/modeoftransport': {
      get: {
        tags: ['modeoftransport'],
        summary: '{"description": "Modes of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.modeoftransport.id'
          },
          {
            '$ref': '#/parameters/rowFilter.modeoftransport.type'
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
                '$ref': '#/definitions/modeoftransport'
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
        tags: ['modeoftransport'],
        summary: '{"description": "Modes of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.modeoftransport'
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
        tags: ['modeoftransport'],
        summary: '{"description": "Modes of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.modeoftransport.id'
          },
          {
            '$ref': '#/parameters/rowFilter.modeoftransport.type'
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
        tags: ['modeoftransport'],
        summary: '{"description": "Modes of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.modeoftransport.id'
          },
          {
            '$ref': '#/parameters/rowFilter.modeoftransport.type'
          },
          {
            '$ref': '#/parameters/body.modeoftransport'
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
    '/modetypes': {
      get: {
        tags: ['modetypes'],
        summary: '{"description": "Class of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.modetypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.modetypes.class'
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
                '$ref': '#/definitions/modetypes'
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
        tags: ['modetypes'],
        summary: '{"description": "Class of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.modetypes'
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
        tags: ['modetypes'],
        summary: '{"description": "Class of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.modetypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.modetypes.class'
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
        tags: ['modetypes'],
        summary: '{"description": "Class of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.modetypes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.modetypes.class'
          },
          {
            '$ref': '#/parameters/body.modetypes'
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
    '/nationality': {
      get: {
        tags: ['nationality'],
        summary: '{"description": "Nationalities", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.nationality.id'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.nationality'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.iso31661alpha3'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.visarequired'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.evwoptional'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.diplomaticexception'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.specialexception'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.validto'
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
                '$ref': '#/definitions/nationality'
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
        tags: ['nationality'],
        summary: '{"description": "Nationalities", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.nationality'
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
        tags: ['nationality'],
        summary: '{"description": "Nationalities", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.nationality.id'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.nationality'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.iso31661alpha3'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.visarequired'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.evwoptional'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.diplomaticexception'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.specialexception'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.validto'
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
        tags: ['nationality'],
        summary: '{"description": "Nationalities", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.nationality.id'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.nationality'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.iso31661alpha3'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.visarequired'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.evwoptional'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.diplomaticexception'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.specialexception'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.nationality.validto'
          },
          {
            '$ref': '#/parameters/body.nationality'
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
    '/partneragency': {
      get: {
        tags: ['partneragency'],
        summary: '{"description": "Partner agencies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.partneragency.id'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.name'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.abbreviatedname'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.seizure'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.intelligence'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.disclosure'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.referralfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.referralto'
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
                '$ref': '#/definitions/partneragency'
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
        tags: ['partneragency'],
        summary: '{"description": "Partner agencies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.partneragency'
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
        tags: ['partneragency'],
        summary: '{"description": "Partner agencies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.partneragency.id'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.name'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.abbreviatedname'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.seizure'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.intelligence'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.disclosure'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.referralfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.referralto'
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
        tags: ['partneragency'],
        summary: '{"description": "Partner agencies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.partneragency.id'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.name'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.abbreviatedname'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.seizure'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.intelligence'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.disclosure'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.referralfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.partneragency.referralto'
          },
          {
            '$ref': '#/parameters/body.partneragency'
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
    '/relevantpowers': {
      get: {
        tags: ['relevantpowers'],
        summary: '{"description": "Legal powers that can be used", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.relevantpowers.id'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.code'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.description'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.url'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.sop'
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
                '$ref': '#/definitions/relevantpowers'
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
        tags: ['relevantpowers'],
        summary: '{"description": "Legal powers that can be used", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.relevantpowers'
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
        tags: ['relevantpowers'],
        summary: '{"description": "Legal powers that can be used", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.relevantpowers.id'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.code'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.description'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.url'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.sop'
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
        tags: ['relevantpowers'],
        summary: '{"description": "Legal powers that can be used", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.relevantpowers.id'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.code'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.description'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.url'
          },
          {
            '$ref': '#/parameters/rowFilter.relevantpowers.sop'
          },
          {
            '$ref': '#/parameters/body.relevantpowers'
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
    '/religion': {
      get: {
        tags: ['religion'],
        summary: '{"description": "Religions", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.religion.id'
          },
          {
            '$ref': '#/parameters/rowFilter.religion.name'
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
                '$ref': '#/definitions/religion'
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
        tags: ['religion'],
        summary: '{"description": "Religions", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.religion'
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
        tags: ['religion'],
        summary: '{"description": "Religions", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.religion.id'
          },
          {
            '$ref': '#/parameters/rowFilter.religion.name'
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
        tags: ['religion'],
        summary: '{"description": "Religions", "schemalastupdated": "10/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.religion.id'
          },
          {
            '$ref': '#/parameters/rowFilter.religion.name'
          },
          {
            '$ref': '#/parameters/body.religion'
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
    '/searchtype': {
      get: {
        tags: ['searchtype'],
        summary: '{"description": "Types of search that can be performed", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.searchtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.type'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.relevantpowerid'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.description'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.usedonobject'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.usedonhuman'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.sop'
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
                '$ref': '#/definitions/searchtype'
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
        tags: ['searchtype'],
        summary: '{"description": "Types of search that can be performed", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.searchtype'
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
        tags: ['searchtype'],
        summary: '{"description": "Types of search that can be performed", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.searchtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.type'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.relevantpowerid'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.description'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.usedonobject'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.usedonhuman'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.sop'
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
        tags: ['searchtype'],
        summary: '{"description": "Types of search that can be performed", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.searchtype.id'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.type'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.relevantpowerid'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.description'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.usedonobject'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.usedonhuman'
          },
          {
            '$ref': '#/parameters/rowFilter.searchtype.sop'
          },
          {
            '$ref': '#/parameters/body.searchtype'
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
    '/sex': {
      get: {
        tags: ['sex'],
        summary: '{"description": "Sex reference list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.sex.id'
          },
          {
            '$ref': '#/parameters/rowFilter.sex.name'
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
                '$ref': '#/definitions/sex'
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
        tags: ['sex'],
        summary: '{"description": "Sex reference list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.sex'
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
        tags: ['sex'],
        summary: '{"description": "Sex reference list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.sex.id'
          },
          {
            '$ref': '#/parameters/rowFilter.sex.name'
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
        tags: ['sex'],
        summary: '{"description": "Sex reference list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.sex.id'
          },
          {
            '$ref': '#/parameters/rowFilter.sex.name'
          },
          {
            '$ref': '#/parameters/body.sex'
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
    '/targetcat': {
      get: {
        tags: ['targetcat'],
        summary: '{"description": "Targeting types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.targetcat.id'
          },
          {
            '$ref': '#/parameters/rowFilter.targetcat.type'
          },
          {
            '$ref': '#/parameters/rowFilter.targetcat.oar'
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
                '$ref': '#/definitions/targetcat'
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
        tags: ['targetcat'],
        summary: '{"description": "Targeting types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.targetcat'
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
        tags: ['targetcat'],
        summary: '{"description": "Targeting types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.targetcat.id'
          },
          {
            '$ref': '#/parameters/rowFilter.targetcat.type'
          },
          {
            '$ref': '#/parameters/rowFilter.targetcat.oar'
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
        tags: ['targetcat'],
        summary: '{"description": "Targeting types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.targetcat.id'
          },
          {
            '$ref': '#/parameters/rowFilter.targetcat.type'
          },
          {
            '$ref': '#/parameters/rowFilter.targetcat.oar'
          },
          {
            '$ref': '#/parameters/body.targetcat'
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
    '/targetgroup': {
      get: {
        tags: ['targetgroup'],
        summary: '{"description": "Target groups", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.targetgroup.id'
          },
          {
            '$ref': '#/parameters/rowFilter.targetgroup.type'
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
                '$ref': '#/definitions/targetgroup'
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
        tags: ['targetgroup'],
        summary: '{"description": "Target groups", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.targetgroup'
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
        tags: ['targetgroup'],
        summary: '{"description": "Target groups", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.targetgroup.id'
          },
          {
            '$ref': '#/parameters/rowFilter.targetgroup.type'
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
        tags: ['targetgroup'],
        summary: '{"description": "Target groups", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.targetgroup.id'
          },
          {
            '$ref': '#/parameters/rowFilter.targetgroup.type'
          },
          {
            '$ref': '#/parameters/body.targetgroup'
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
    '/tdaapprovalstatus': {
      get: {
        tags: ['tdaapprovalstatus'],
        summary: '{"description": "Governance approval status", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdaapprovalstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdaapprovalstatus.status'
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
                '$ref': '#/definitions/tdaapprovalstatus'
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
        tags: ['tdaapprovalstatus'],
        summary: '{"description": "Governance approval status", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.tdaapprovalstatus'
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
        tags: ['tdaapprovalstatus'],
        summary: '{"description": "Governance approval status", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdaapprovalstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdaapprovalstatus.status'
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
        tags: ['tdaapprovalstatus'],
        summary: '{"description": "Governance approval status", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdaapprovalstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdaapprovalstatus.status'
          },
          {
            '$ref': '#/parameters/body.tdaapprovalstatus'
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
    '/tdacodes': {
      get: {
        tags: ['tdacodes'],
        summary: '{"description": "Governance bodies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdacodes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdacodes.name'
          },
          {
            '$ref': '#/parameters/rowFilter.tdacodes.code'
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
                '$ref': '#/definitions/tdacodes'
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
        tags: ['tdacodes'],
        summary: '{"description": "Governance bodies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.tdacodes'
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
        tags: ['tdacodes'],
        summary: '{"description": "Governance bodies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdacodes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdacodes.name'
          },
          {
            '$ref': '#/parameters/rowFilter.tdacodes.code'
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
        tags: ['tdacodes'],
        summary: '{"description": "Governance bodies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdacodes.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdacodes.name'
          },
          {
            '$ref': '#/parameters/rowFilter.tdacodes.code'
          },
          {
            '$ref': '#/parameters/body.tdacodes'
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
    '/tdareasons': {
      get: {
        tags: ['tdareasons'],
        summary: '{"description": "Reasons for governance request", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdareasons.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdareasons.reason'
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
                '$ref': '#/definitions/tdareasons'
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
        tags: ['tdareasons'],
        summary: '{"description": "Reasons for governance request", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.tdareasons'
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
        tags: ['tdareasons'],
        summary: '{"description": "Reasons for governance request", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdareasons.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdareasons.reason'
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
        tags: ['tdareasons'],
        summary: '{"description": "Reasons for governance request", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.tdareasons.id'
          },
          {
            '$ref': '#/parameters/rowFilter.tdareasons.reason'
          },
          {
            '$ref': '#/parameters/body.tdareasons'
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
    '/team': {
      get: {
        tags: ['team'],
        summary: '{"description": "Teams", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.team.id'
          },
          {
            '$ref': '#/parameters/rowFilter.team.name'
          },
          {
            '$ref': '#/parameters/rowFilter.team.code'
          },
          {
            '$ref': '#/parameters/rowFilter.team.description'
          },
          {
            '$ref': '#/parameters/rowFilter.team.costcentrecode'
          },
          {
            '$ref': '#/parameters/rowFilter.team.parentteamid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.bffunctiontypeid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.ministryid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.departmentid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.directorateid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.branchid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.divisionid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.commandid'
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
                '$ref': '#/definitions/team'
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
        tags: ['team'],
        summary: '{"description": "Teams", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.team'
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
        tags: ['team'],
        summary: '{"description": "Teams", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.team.id'
          },
          {
            '$ref': '#/parameters/rowFilter.team.name'
          },
          {
            '$ref': '#/parameters/rowFilter.team.code'
          },
          {
            '$ref': '#/parameters/rowFilter.team.description'
          },
          {
            '$ref': '#/parameters/rowFilter.team.costcentrecode'
          },
          {
            '$ref': '#/parameters/rowFilter.team.parentteamid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.bffunctiontypeid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.ministryid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.departmentid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.directorateid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.branchid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.divisionid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.commandid'
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
        tags: ['team'],
        summary: '{"description": "Teams", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.team.id'
          },
          {
            '$ref': '#/parameters/rowFilter.team.name'
          },
          {
            '$ref': '#/parameters/rowFilter.team.code'
          },
          {
            '$ref': '#/parameters/rowFilter.team.description'
          },
          {
            '$ref': '#/parameters/rowFilter.team.costcentrecode'
          },
          {
            '$ref': '#/parameters/rowFilter.team.parentteamid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.bffunctiontypeid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.ministryid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.departmentid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.directorateid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.branchid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.divisionid'
          },
          {
            '$ref': '#/parameters/rowFilter.team.commandid'
          },
          {
            '$ref': '#/parameters/body.team'
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
    '/teamlocations': {
      get: {
        tags: ['teamlocations'],
        summary: '{"description": "Team to location mapping", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.teamlocations.id'
          },
          {
            '$ref': '#/parameters/rowFilter.teamlocations.teamid'
          },
          {
            '$ref': '#/parameters/rowFilter.teamlocations.locationid'
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
                '$ref': '#/definitions/teamlocations'
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
        tags: ['teamlocations'],
        summary: '{"description": "Team to location mapping", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.teamlocations'
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
        tags: ['teamlocations'],
        summary: '{"description": "Team to location mapping", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.teamlocations.id'
          },
          {
            '$ref': '#/parameters/rowFilter.teamlocations.teamid'
          },
          {
            '$ref': '#/parameters/rowFilter.teamlocations.locationid'
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
        tags: ['teamlocations'],
        summary: '{"description": "Team to location mapping", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.teamlocations.id'
          },
          {
            '$ref': '#/parameters/rowFilter.teamlocations.teamid'
          },
          {
            '$ref': '#/parameters/rowFilter.teamlocations.locationid'
          },
          {
            '$ref': '#/parameters/body.teamlocations'
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
    '/technicalprojects': {
      get: {
        tags: ['technicalprojects'],
        summary: '{"description": "Technical projects", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.technicalprojects.id'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.area'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.team'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.name'
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
                '$ref': '#/definitions/technicalprojects'
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
        tags: ['technicalprojects'],
        summary: '{"description": "Technical projects", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.technicalprojects'
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
        tags: ['technicalprojects'],
        summary: '{"description": "Technical projects", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.technicalprojects.id'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.area'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.team'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.name'
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
        tags: ['technicalprojects'],
        summary: '{"description": "Technical projects", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.technicalprojects.id'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.area'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.team'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojects.name'
          },
          {
            '$ref': '#/parameters/body.technicalprojects'
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
    '/technicalprojectstatus': {
      get: {
        tags: ['technicalprojectstatus'],
        summary: '{"description": "Technical project statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.technicalprojectstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojectstatus.status'
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
                '$ref': '#/definitions/technicalprojectstatus'
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
        tags: ['technicalprojectstatus'],
        summary: '{"description": "Technical project statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.technicalprojectstatus'
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
        tags: ['technicalprojectstatus'],
        summary: '{"description": "Technical project statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.technicalprojectstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojectstatus.status'
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
        tags: ['technicalprojectstatus'],
        summary: '{"description": "Technical project statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.technicalprojectstatus.id'
          },
          {
            '$ref': '#/parameters/rowFilter.technicalprojectstatus.status'
          },
          {
            '$ref': '#/parameters/body.technicalprojectstatus'
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
    '/title': {
      get: {
        tags: ['title'],
        summary: '{"description": "Person titles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.title.id'
          },
          {
            '$ref': '#/parameters/rowFilter.title.title'
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
                '$ref': '#/definitions/title'
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
        tags: ['title'],
        summary: '{"description": "Person titles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.title'
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
        tags: ['title'],
        summary: '{"description": "Person titles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.title.id'
          },
          {
            '$ref': '#/parameters/rowFilter.title.title'
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
        tags: ['title'],
        summary: '{"description": "Person titles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.title.id'
          },
          {
            '$ref': '#/parameters/rowFilter.title.title'
          },
          {
            '$ref': '#/parameters/body.title'
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
    '/unlocode': {
      get: {
        tags: ['unlocode'],
        summary: '{"description": "United Nations location code list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.unlocode.id'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.name'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.namewodiacritics'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.iata'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.locode'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.seaport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.railterminal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.airport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.postexchange'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.multimodal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.fixedtransport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.bordercrossing'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.subdivision'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.roadterminal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.validto'
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
                '$ref': '#/definitions/unlocode'
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
        tags: ['unlocode'],
        summary: '{"description": "United Nations location code list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.unlocode'
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
        tags: ['unlocode'],
        summary: '{"description": "United Nations location code list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.unlocode.id'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.name'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.namewodiacritics'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.iata'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.locode'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.seaport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.railterminal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.airport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.postexchange'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.multimodal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.fixedtransport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.bordercrossing'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.subdivision'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.roadterminal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.validto'
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
        tags: ['unlocode'],
        summary: '{"description": "United Nations location code list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.unlocode.id'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.iso31661alpha2'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.geolong'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.geolat'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.name'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.namewodiacritics'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.iata'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.locode'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.seaport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.railterminal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.airport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.postexchange'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.multimodal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.fixedtransport'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.bordercrossing'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.subdivision'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.roadterminal'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.countryid'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.validfrom'
          },
          {
            '$ref': '#/parameters/rowFilter.unlocode.validto'
          },
          {
            '$ref': '#/parameters/body.unlocode'
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
    '/workarea': {
      get: {
        tags: ['workarea'],
        summary: '{"description": "Working areas", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.workarea.id'
          },
          {
            '$ref': '#/parameters/rowFilter.workarea.area'
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
                '$ref': '#/definitions/workarea'
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
        tags: ['workarea'],
        summary: '{"description": "Working areas", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/body.workarea'
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
        tags: ['workarea'],
        summary: '{"description": "Working areas", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.workarea.id'
          },
          {
            '$ref': '#/parameters/rowFilter.workarea.area'
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
        tags: ['workarea'],
        summary: '{"description": "Working areas", "schemalastupdated": "06/03/2019", "dataversion": 1}',
        parameters: [{
            '$ref': '#/parameters/rowFilter.workarea.id'
          },
          {
            '$ref': '#/parameters/rowFilter.workarea.area'
          },
          {
            '$ref': '#/parameters/body.workarea'
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
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `activities.id`.<fk table=\'activities\' column=\'id\'/>'
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
    },
    address: {
      description: '{"description": "Address list for location", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'line1', 'city', 'geographicregionid', 'iso31661alpha2'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        line1: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Address line 1", "description": "First line of address", "summaryview": "true"}'
        },
        line2: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Address line 2", "description": "Second line of address", "summaryview": "false"}'
        },
        line3: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Address line 3" "description": "Third line of address", "summaryview": "false"}'
        },
        city: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "City", "description": "Town / City", "summaryview": "true", "aliases": "town"}'
        },
        geographicregionid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `geographicregion.id`.<fk table=\'geographicregion\' column=\'id\'/>'
        },
        iso31661alpha2: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        postcode: {
          maxLength: 10,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Post code", "description": "Post Code / ZIP", "summaryview": "true", "aliases": "zip code"}'
        },
        countryid: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false", "linkedrecord": "country(id)"\n\nNote:\nThis is a Foreign Key to `country.id`.<fk table=\'country\' column=\'id\'/>'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    bffunctiontypes: {
      description: '{"description": "Border functions type clarifications", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'bffunction'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        bffunction: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Function", "description": "Border crossing type", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    branch: {
      description: '{"description": "Branch or Region names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'directorateid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of branch or region", "summaryview": "true", "aliases": "region"}'
        },
        directorateid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `directorate.id`.<fk table=\'directorate\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    carrierlist: {
      description: '{"description": "List of Carriers", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'aviation', 'maritime'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Carrier name", "description": "Name of carrier", "summaryview": "true"}'
        },
        twolettercode: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Two letter code", "description": "Two letter carrier code", "summaryview": "true"}'
        },
        designator: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Airline designator", "description": "Airline designator code", "summaryview": "true"}'
        },
        alliance: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Alliance code", "description": "Alliance partnership code", "summaryview": "true"}'
        },
        aviation: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Aviation", "description": "Aviation carrier?", "summaryview": "true"}'
        },
        maritime: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Maritime", "description": "Maritime carrier?", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    command: {
      description: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'divisionid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of command", "summaryview": "true"}'
        },
        divisionid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `division.id`.<fk table=\'division\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    competence: {
      description: '{"description": "Competence states", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'description', 'competence'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        description: {
          format: 'text',
          type: 'string',
          description: '{"label": "description", "description": "description of competence or impairment", "summaryview": "true"}'
        },
        competence: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Competence", "description": "Competence agreed", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    country: {
      description: '{"description": "Countries", "schemalastupdated": "10/03/2019", "dataversion": 1}',
      required: ['id',
        'iso31661alpha2',
        'iso31661alpha3',
        'name',
        'continent',
        'iso31661numeric'
      ],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        iso31661alpha2: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        iso31661alpha3: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "3 digit alpha code", "description": "Country 3 Character alpha code", "summaryview": "true"}'
        },
        name: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Country name", "description": "Country name", "summaryview": "true"}'
        },
        continent: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Continent", "description": "Countinent country is part of", "summaryview": "true"}'
        },
        dial: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Phone dial code", "description": "Country dailing prefix", "summaryview": "true"}'
        },
        iso31661numeric: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "3 digit numeric code", "description": "Country numeric ISO code", "summaryview": "true"}'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    crewrole: {
      description: '{"description": "Command list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Crew position name", "summaryview": "true"}'
        },
        description: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Description", "description": "description of role", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    criminalrecordtype: {
      description: '{"description": "Criminal record type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'recordname'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        recordname: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"description": "record category", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    currency: {
      description: '{"description": "Currencies", "schemalastupdated": "10/03/2019", "dataversion": 1}',
      required: ['id', 'iso31661alpha2', 'currency', 'currencycode'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        iso31661alpha2: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        currency: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Currency", "description": "Currency name", "summaryview": "true"}'
        },
        currencycode: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Code", "description": "Currency code", "summaryview": "true"}'
        },
        countryid: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false", "linkedrecord": "country(id)"\n\nNote:\nThis is a Foreign Key to `country.id`.<fk table=\'country\' column=\'id\'/>'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    department: {
      description: '{"description": "Department names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'ministryid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"description": "Name of department", "summaryview": "true"}'
        },
        ministryid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `ministry.id`.<fk table=\'ministry\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    directorate: {
      description: '{"description": "Directorate names", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'departmentid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier","description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name","description": "Name of directorate", "summaryview": "true"}'
        },
        departmentid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `department.id`.<fk table=\'department\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    division: {
      description: '{"description": "Division", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'branchid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Division name", "summaryview": "true"}'
        },
        branchid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `branch.id`.<fk table=\'branch\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    documenttype: {
      description: '{"description": "Identity document type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'code', 'shortdescription'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        code: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Code", "description": "Document system code", "summaryview": "true"}'
        },
        shortdescription: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Long description", "description": "Document code long description", "summaryview": "true"}'
        },
        longdescription: {
          maxLength: 100,
          format: 'character varying',
          type: 'string'
        }
      },
      type: 'object'
    },
    dogrole: {
      description: '{"description": "Dog roles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'code', 'description'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        code: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Code", "description": "Dog role codes", "summaryview": "true"}'
        },
        description: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Short description", "description": "Description of dog role", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    employmenttypes: {
      description: '{"description": "Employment types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 30,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Employment / job name", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    errorcodes: {
      description: '{"description": "Error messages", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'message', 'description'],
      properties: {
        id: {
          maxLength: 10,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique error code", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        message: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Message", "description": "System error message", "summaryview": "true"}'
        },
        description: {
          maxLength: 300,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Description", "description": "Detailed description of error cause", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    ethnicity: {
      description: '{"description": "Ethnicity breakdowns", "schemalastupdated": "10/03/2019", "dataversion": 1}',
      required: ['id', 'ethnicity', 'subethnicity'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        ethnicity: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Ethnicity", "description": "Ethnicity high level descriptor", "summaryview": "true"}'
        },
        subethnicity: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Sub Ethnicity", "description": "Ethnicity low level descriptor", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    eventpeopletype: {
      description: '{"description": "Types of people in an event", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'type', 'description'],
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
          description: '{"label": "People type", "description": "Category of people in event", "summaryview": "true"}'
        },
        description: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Description", "description": "Description of people in event", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    eventstatus: {
      description: '{"description": "Event statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        status: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Status", "description": "Status description for event", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    eventtype: {
      description: '{"description": "Event types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Event types", "description": "Description of the different event types", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    financialinstrument: {
      description: '{"description": "Financial currency types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'type'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Status", "description": "Type of currency", "summaryview": "true"}'
        },
        description: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Status", "description": "Description of financial instrument", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    gender: {
      description: '{"description": "Self identifying gender lists", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'gender'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        gender: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Gender", "description": "Name of gender", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    geographicregion: {
      description: '{"description": "Geographic regions", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        code: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "County code", "description": "International region code", "summaryview": "true"}'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "County name", "description": "County / region name", "summaryview": "true", "aliases": "region"}'
        },
        iso31661alpha2: {
          maxLength: 10,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        countryid: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false", "linkedrecord": "country(id)"'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    goodtype: {
      description: '{"description": "Customs and Seizure good type", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'level1name', 'level2name', 'level3name', 'enforcedfrom'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        level1name: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name level 1", "description": "Name of high level category good", "summaryview": "true"}'
        },
        level2name: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name level 1", "description": "Name of high level category good", "summaryview": "true"}'
        },
        level3name: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name level 1", "description": "Name of high level category good", "summaryview": "true"}'
        },
        controlstrategypriority: {
          maxLength: 1,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Control priority", "description": "Priority of control strategy", "summaryview": "false"}'
        },
        description: {
          maxLength: 150,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Description", "description": "Description of good", "summaryview": "true"}'
        },
        enforcedfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Enforce from", "description": "Date controlled enforced from", "summaryview": "false"}'
        },
        enforcedto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Enforced to", "description": "Date controlled enforced to", "summaryview": "false"}'
        }
      },
      type: 'object'
    },
    grade: {
      description: '{"description": "Civil service grades", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Grade code", "description": "Civil service grade code", "summaryview": "true"}'
        },
        parentgradetypeid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `grade.id`.<fk table=\'grade\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    icao: {
      description: '{"description": "ICAO list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'icao', 'geolat', 'geolong'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        iso31661alpha2: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "ICAO site name", "summaryview": "true"}'
        },
        iata: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "IATA", "description": "IATA code", "summaryview": "true"}'
        },
        municipality: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "City", "description": "Municipality / region", "summaryview": "true", "aliases": "city", "region"}'
        },
        icao: {
          maxLength: 10,
          format: 'character varying',
          type: 'string',
          description: '{"label": "ICAO code", "description": "ICAO code", "summaryview": "true"}'
        },
        geolat: {
          format: 'numeric',
          type: 'number',
          description: '{"label": "Latitude", "description": "Geographic latitude", "summaryview": "false"}'
        },
        geolong: {
          format: 'numeric',
          type: 'number',
          description: '{"label": "Longitude", "description": "Geographic longitude", "summaryview": "false"}'
        },
        type: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Port type", "description": "Type of port", "summaryview": "true"}'
        },
        countryid: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false", "linkedrecord": "country(id)"\n\nNote:\nThis is a Foreign Key to `country.id`.<fk table=\'country\' column=\'id\'/>'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    indicators: {
      description: '{"description": "Intelligence indicators", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'ct', 'ien', 'referral'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        indicator: {
          maxLength: 200,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Indicator description", "description": "Type of indicator", "summaryview": "true"}'
        },
        ct: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "CT", "description": "Valid type for counter terrorism", "summaryview": "true"}'
        },
        ien: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "IEN", "description": "Valid type for immediate event notification", "summaryview": "true"}'
        },
        referral: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Referral", "description": "Valid types for referrals", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    legtypes: {
      description: '{"description": "Mode of leg journey", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'description'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        description: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Description", "description": "Description of journey type", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    location: {
      description: '{"description": "Location details", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'addressid', 'geolat', 'geolong'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Location name", "summaryview": "true"}'
        },
        description: {
          format: 'text',
          type: 'string',
          description: '{"label": "Description", "description": "Description of location", "summaryview": "true"}'
        },
        unlocodeid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `unlocode.id`.<fk table=\'unlocode\' column=\'id\'/>'
        },
        addressid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `address.id`.<fk table=\'address\' column=\'id\'/>'
        },
        geolat: {
          format: 'numeric',
          type: 'number',
          description: '{"label": "Latitude", "description": "Geographic latitude", "summaryview": "false"}'
        },
        geolong: {
          format: 'numeric',
          type: 'number',
          description: '{"label": "Longitude", "description": "Geographic longitude", "summaryview": "false"}'
        },
        icaoid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `icao.id`.<fk table=\'icao\' column=\'id\'/>'
        },
        bflocationtypeid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `bflocationtype.id`.<fk table=\'bflocationtype\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    lockup: {
      description: '{"description": "Seizure lockup types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'description', 'lockuptypeid', 'locationid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of lockup", "summaryview": "true"}'
        },
        description: {
          format: 'text',
          type: 'string',
          description: '{"label": "Description", "description": "Description of lockup", "summaryview": "true"}'
        },
        lockuptypeid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `lockuptype.id`.<fk table=\'lockuptype\' column=\'id\'/>'
        },
        locationid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `location.id`.<fk table=\'location\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    lockuptype: {
      description: '{"description": "Types of lockup", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'code'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        code: {
          maxLength: 6,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Code", "description": "Lockup code", "summaryview": "true"}'
        },
        name: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Class of lockup", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    marital: {
      description: '{"description": "Marital statuses", "schemalastupdated": "10/03/2019", "dataversion": 1}',
      required: ['id', 'code'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        code: {
          maxLength: 1,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Short Code", "description": "Short code", "summaryview": "true"}'
        },
        description: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Description", "description": "Marital status description", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    ministry: {
      description: '{"description": "Government ministries", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of branch or region", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    modeoftransport: {
      description: '{"description": "Modes of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'type'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 30,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Type", "description": "Types of transport", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    modetypes: {
      description: '{"description": "Class of transport", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'class'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        class: {
          maxLength: 60,
            format: 'character varying',
            type: 'string',
            description: '{"label": "Class", "description": "Type of transport class", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    nationality: {
      description: '{"description": "Nationalities", "schemalastupdated": "10/03/2019", "dataversion": 1}',
      required: ['id',
        'nationality',
        'visarequired',
        'evwoptional',
        'diplomaticexception',
        'specialexception'
      ],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        nationality: {
          maxLength: 330,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Identifier", "description": "Nationality names", "summaryview": "true"}'
        },
        iso31661alpha3: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "3 digit alpha code", "description": "Country 3 Character alpha code", "summaryview": "true"}'
        },
        iso31661alpha2: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        visarequired: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Visa required", "description": "Is VISA required to visit UK", "summaryview": "false"}'
        },
        evwoptional: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Optional - EVW", "description": "Is Electronic Visa Waver optional to visit UK", "summaryview": "false"}'
        },
        diplomaticexception: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Exception - Diplomatic", "description": "Are there diplomatic exceptions for visiting the UK", "summaryview": "false"}'
        },
        specialexception: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Exception - Special", "description": "Are there special exceptions for visiting the UK", "summaryview": "false"}'
        },
        countryid: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false", "linkedrecord": "country(id)"\n\nNote:\nThis is a Foreign Key to `country.id`.<fk table=\'country\' column=\'id\'/>'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    partneragency: {
      description: '{"description": "Partner agencies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id',
        'name',
        'abbreviatedname',
        'seizure',
        'intelligence',
        'disclosure',
        'referralfrom',
        'referralto'
      ],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Partner agency name", "summaryview": "true"}'
        },
        abbreviatedname: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Abbreviated name", "description": "Partner agency short name", "summaryview": "true"}'
        },
        seizure: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Seizure", "description": "Valid seizure partner", "summaryview": "true"}'
        },
        intelligence: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Intelligence", "description": "Valid intelligence partner", "summaryview": "true"}'
        },
        disclosure: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Disclosure", "description": "Valid disclosure partner", "summaryview": "true"}'
        },
        referralfrom: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Referral from", "description": "Partner allowed to make referrals", "summaryview": "true"}'
        },
        referralto: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Referral to", "description": "Partner allowed to receive referrals", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    relevantpowers: {
      description: '{"description": "Legal powers that can be used", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'code', 'description', 'sop'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        code: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Legal code", "description": "Legal code number", "summaryview": "true"}'
        },
        description: {
          format: 'text',
          type: 'string',
          description: '{"label": "Description", "description": "Short description of power", "summaryview": "true"}'
        },
        url: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "URL", "description": "Link to full power in legislation", "summaryview": "true"}'
        },
        sop: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "sop", "description": "Valid power for search of person", "summaryview": "false"}'
        }
      },
      type: 'object'
    },
    religion: {
      description: '{"description": "Religions", "schemalastupdated": "10/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Religion name", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    searchtype: {
      description: '{"description": "Types of search that can be performed", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'type', 'relevantpowerid'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Search type", "description": "Type of search", "summaryview": "true"}'
        },
        relevantpowerid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `relevantpowers.id`.<fk table=\'relevantpowers\' column=\'id\'/>'
        },
        description: {
          format: 'text',
          type: 'string',
          description: '{"label": "Description", "description": "Description of search", "summaryview": "true"}'
        },
        usedonobject: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Object", "description": "Allowed to be used on objects", "summaryview": "true"}'
        },
        usedonhuman: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Human", "description": "Allowed to be used on humans", "summaryview": "true"}'
        },
        sop: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Search of Person", "description": "Valid for search of person", "summaryview": "false"}'
        }
      },
      type: 'object'
    },
    sex: {
      description: '{"description": "Sex reference list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name'],
      properties: {
        id: {
          maxLength: 1,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Identifier", "description": "Character unique identity reference","summaryview": "true", "aliases": "sexcharacter"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of sex", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    targetcat: {
      description: '{"description": "Targeting types", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'oar'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Target type", "description": "Type of target", "summaryview": "true"}'
        },
        oar: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "OAR", "description": "Valid for Operational activities reporting", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    targetgroup: {
      description: '{"description": "Target groups", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'type'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        type: {
          maxLength: 60,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Target type", "description": "Target group type", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    tdaapprovalstatus: {
      description: '{"description": "Governance approval status", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'status'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        status: {
          maxLength: 80,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Status", "description": "Governance status of request", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    tdacodes: {
      description: '{"description": "Governance bodies", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'name', 'code'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 80,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of governing body", "summaryview": "true"}'
        },
        code: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Code", "description": "Governing body code", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    tdareasons: {
      description: '{"description": "Reasons for governance request", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'reason'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        reason: {
          maxLength: 80,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Reason", "description": "Reason for request", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    team: {
      description: '{"description": "Teams", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id',
        'name',
        'code',
        'bffunctiontypeid',
        'ministryid',
        'departmentid'
      ],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Name of team", "summaryview": "true"}'
        },
        code: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Code", "description": "Team code", "summaryview": "true"}'
        },
        description: {
          format: 'text',
          type: 'string',
          description: '{"label": "Description", "description": "Description of team", "summaryview": "true"}'
        },
        costcentrecode: {
          maxLength: 50,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Cost centre", "description": "Team cost centre code", "summaryview": "true"}'
        },
        parentteamid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `team.id`.<fk table=\'team\' column=\'id\'/>'
        },
        bffunctiontypeid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `bffunctiontypes.id`.<fk table=\'bffunctiontypes\' column=\'id\'/>'
        },
        ministryid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `ministry.id`.<fk table=\'ministry\' column=\'id\'/>'
        },
        departmentid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `department.id`.<fk table=\'department\' column=\'id\'/>'
        },
        directorateid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `directorate.id`.<fk table=\'directorate\' column=\'id\'/>'
        },
        branchid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `branch.id`.<fk table=\'branch\' column=\'id\'/>'
        },
        divisionid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `division.id`.<fk table=\'division\' column=\'id\'/>'
        },
        commandid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `command.id`.<fk table=\'command\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    teamlocations: {
      description: '{"description": "Team to location mapping", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'teamid', 'locationid'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Primary Key.<pk/>'
        },
        teamid: {
          format: 'uuid',
          type: 'string',
          description: 'Note:\nThis is a Foreign Key to `team.id`.<fk table=\'team\' column=\'id\'/>'
        },
        locationid: {
          format: 'integer',
          type: 'integer',
          description: 'Note:\nThis is a Foreign Key to `location.id`.<fk table=\'location\' column=\'id\'/>'
        }
      },
      type: 'object'
    },
    technicalprojects: {
      description: '{"description": "Technical projects", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'area', 'team', 'name'],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        area: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Area", "description": "Project responsible area", "summaryview": "true"}'
        },
        team: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Team", "description": "Project team name", "summaryview": "true"}'
        },
        name: {
          maxLength: 100,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Project name", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    technicalprojectstatus: {
      description: '{"description": "Technical project statuses", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'status'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        status: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Status", "description": "project statuses", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    title: {
      description: '{"description": "Person titles", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'title'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "database unique identity record", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        title: {
          maxLength: 20,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Title", "description": "Name of title", "summaryview": "true"}'
        }
      },
      type: 'object'
    },
    unlocode: {
      description: '{"description": "United Nations location code list", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id',
        'name',
        'namewodiacritics',
        'locode',
        'seaport',
        'railterminal',
        'airport',
        'postexchange',
        'multimodal',
        'fixedtransport',
        'bordercrossing',
        'roadterminal'
      ],
      properties: {
        id: {
          format: 'uuid',
          type: 'string',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        iso31661alpha2: {
          maxLength: 2,
          format: 'character varying',
          type: 'string',
          description: '{"label": "2 digit alpha code", "description": "Country 2 Character alpha code", "summaryview": "true"}'
        },
        geolong: {
          format: 'numeric',
          type: 'number',
          description: '{"label": "Longitude", "description": "Geographic longitude", "summaryview": "false"}'
        },
        geolat: {
          format: 'numeric',
          type: 'number',
          description: '{"label": "Latitude", "description": "Geographic latitude", "summaryview": "false"}'
        },
        name: {
          maxLength: 80,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name", "description": "Location name", "summaryview": "true"}'
        },
        namewodiacritics: {
          maxLength: 80,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Name with diacritics", "description": "Location name including diacritics", "summaryview": "false"}'
        },
        iata: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "IATA", "description": "IATA code", "summaryview": "false"}'
        },
        locode: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Locode", "description": "Location code", "summaryview": "false"}'
        },
        seaport: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Sea port", "description": "Is an sea port?", "summaryview": "false"}'
        },
        railterminal: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Rail terminal", "description": "Is an rail terminal?", "summaryview": "false"}'
        },
        airport: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Airport", "description": "Is an airport?", "summaryview": "false"}'
        },
        postexchange: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Post exchanget", "description": "Is an postal exchange?", "summaryview": "false"}'
        },
        multimodal: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Multi modal", "description": "Is multi modal?", "summaryview": "false"}'
        },
        fixedtransport: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Fixed transport", "description": "Is a fixed transport point?", "summaryview": "false"}'
        },
        bordercrossing: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Border crossing", "description": "Is a border crossing point?", "summaryview": "false"}'
        },
        subdivision: {
          maxLength: 3,
          format: 'character varying',
          type: 'string',
          description: '{"label": "County", "description": "Area of port", "summaryview": "false", "aliases": "region"}'
        },
        roadterminal: {
          format: 'boolean',
          type: 'boolean',
          description: '{"label": "Road terminal", "description": "Is a road terminal?", "summaryview": "false"}'
        },
        countryid: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Linked country id", "description": "Country link to Country dataset", "summaryview": "false", "linkedrecord": "country(id)"\n\nNote:\nThis is a Foreign Key to `country.id`.<fk table=\'country\' column=\'id\'/>'
        },
        validfrom: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid from date", "description": "Item valid from date", "summaryview" : "false"}'
        },
        validto: {
          format: 'date',
          type: 'string',
          description: '{"label": "Valid to date", "description": "Item valid to date", "summaryview" : "false"}'
        }
      },
      type: 'object'
    },
    workarea: {
      description: '{"description": "Working areas", "schemalastupdated": "06/03/2019", "dataversion": 1}',
      required: ['id', 'area'],
      properties: {
        id: {
          format: 'integer',
          type: 'integer',
          description: '{"label": "Identifier", "description": "Unique identifying column", "summaryview": "false"}\n\nNote:\nThis is a Primary Key.<pk/>'
        },
        area: {
          maxLength: 40,
          format: 'character varying',
          type: 'string',
          description: '{"label": "Area", "description": "Work area short description", "summaryview": "true"}'
        }
      },
      type: 'object'
    }
  }
};
// example of item response returned by the postgREST API wrapper
const itemResponse = [
  {
    id: 3,
    iso31661alpha2: 'AL',
    iso31661alpha3: 'ALB',
    name: 'Albania',
    continent: 'EU',
    dial: '355',
    iso31661numeric: 8,
    validfrom: null,
    validto: null
  }
];

const itemFormattedData = {
  code: 200,
  status: null,
  entityName: 'country',
  entityLabel: '',
  entitySchema: {
    description: {
      description: 'Countries',
      dataversion: 1,
      lastupdated: '10/03/2019'
    },
    required: [
      'id',
      'iso31661alpha2',
      'iso31661alpha3',
      'name',
      'continent',
      'iso31661numeric'
    ],
    properties: {
      id: {
        format: 'integer',
        type: 'integer',
        description: {
          label: 'Identifier',
          description: 'database unique identity record',
          summaryview: 'false'
        }
      },
      iso31661alpha2: {
        maxLength: 2,
        format: 'character varying',
        type: 'string',
        description: {
          label: '2 digit alpha code',
          description: 'Country 2 Character alpha code',
          summaryview: 'true'
        }
      },
      iso31661alpha3: {
        maxLength: 3,
        format: 'character varying',
        type: 'string',
        description: {
          label: '3 digit alpha code',
          description: 'Country 3 Character alpha code',
          summaryview: 'true'
        }
      },
      name: {
        maxLength: 40,
        format: 'character varying',
        type: 'string',
        description: {
          label: 'Country name',
          description: 'Country name',
          summaryview: 'true'
        }
      },
      continent: {
        maxLength: 2,
        format: 'character varying',
        type: 'string',
        description: {
          label: 'Continent',
          description: 'Countinent country is part of',
          summaryview: 'true'
        }
      },
      dial: {
        maxLength: 20,
        format: 'character varying',
        type: 'string',
        description: {
          label: 'Phone dial code',
          description: 'Country dailing prefix',
          summaryview: 'true'
        }
      },
      iso31661numeric: {
        format: 'integer',
        type: 'integer',
        description: {
          label: '3 digit numeric code',
          description: 'Country numeric ISO code',
          summaryview: 'true'
        }
      },
      validfrom: {
        format: 'date',
        type: 'string',
        description: {
          label: 'Valid from date',
          description: 'Item valid from date',
          summaryview: 'false'
        }
      },
      validto: {
        format: 'date',
        type: 'string',
        description: {
          label: 'Valid to date',
          description: 'Item valid to date',
          summaryview: 'false'
        }
      }
    }
  },
  itemid: 3,
  data: [
    {
      id: 3,
      iso31661alpha2: 'AL',
      iso31661alpha3: 'ALB',
      name: 'Albania',
      continent: 'EU',
      dial: '355',
      iso31661numeric: 8,
      validfrom: null,
      validto: null
    }
  ]
};

module.exports = {
  entitiesResponse,
  itemResponse,
  itemFormattedData
}
