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
import {FailoverGroupsRelations} from './FailoverGroupsRelations';

/**
 * The FailoverGroups model module.
 * @module model/FailoverGroups
 * @version 1.0.0
 */
export class FailoverGroups {
  /**
   * Constructs a new <code>FailoverGroups</code>.
   * Failover groups
   * @alias module:model/FailoverGroups
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FailoverGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FailoverGroups} obj Optional instance to populate.
   * @return {module:model/FailoverGroups} The populated <code>FailoverGroups</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FailoverGroups();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = FailoverGroupsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
FailoverGroups.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
FailoverGroups.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
FailoverGroups.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
FailoverGroups.prototype.description = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
FailoverGroups.prototype.createdDate = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
FailoverGroups.prototype.lastModified = undefined;

/**
 * @member {module:model/FailoverGroupsRelations} relations
 */
FailoverGroups.prototype.relations = undefined;

// Implement FailoverGroupsBody interface:
