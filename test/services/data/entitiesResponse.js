module.exports = {
  paths: {
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
    }
  }
}
