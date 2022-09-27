/*
 * Milestone Integration Platform VMS RESTful API
 * VMS Configuration and control for XProtect
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {MetadataGroupsRelations} from './MetadataGroupsRelations';

/**
 * The MetadataGroups model module.
 * @module model/MetadataGroups
 * @version 1.0.0
 */
export class MetadataGroups {
  /**
   * Constructs a new <code>MetadataGroups</code>.
   * Metadata groups
   * @alias module:model/MetadataGroups
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MetadataGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataGroups} obj Optional instance to populate.
   * @return {module:model/MetadataGroups} The populated <code>MetadataGroups</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetadataGroups();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('builtIn'))
        obj.builtIn = ApiClient.convertToType(data['builtIn'], 'Boolean');
      if (data.hasOwnProperty('relations'))
        obj.relations = MetadataGroupsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
MetadataGroups.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
MetadataGroups.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
MetadataGroups.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
MetadataGroups.prototype.description = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
MetadataGroups.prototype.lastModified = undefined;

/**
 * Built-in group
 * @member {Boolean} builtIn
 */
MetadataGroups.prototype.builtIn = undefined;

/**
 * @member {module:model/MetadataGroupsRelations} relations
 */
MetadataGroups.prototype.relations = undefined;
