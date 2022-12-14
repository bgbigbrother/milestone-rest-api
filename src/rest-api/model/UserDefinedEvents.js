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
import {UserDefinedEventsRelations} from './UserDefinedEventsRelations';

/**
 * The UserDefinedEvents model module.
 * @module model/UserDefinedEvents
 * @version 1.0.0
 */
export class UserDefinedEvents {
  /**
   * Constructs a new <code>UserDefinedEvents</code>.
   * User-defined event
   * @alias module:model/UserDefinedEvents
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserDefinedEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDefinedEvents} obj Optional instance to populate.
   * @return {module:model/UserDefinedEvents} The populated <code>UserDefinedEvents</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserDefinedEvents();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('subtype'))
        obj.subtype = ApiClient.convertToType(data['subtype'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = UserDefinedEventsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
UserDefinedEvents.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
UserDefinedEvents.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
UserDefinedEvents.prototype.name = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
UserDefinedEvents.prototype.lastModified = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
UserDefinedEvents.prototype.createdDate = undefined;

/**
 * Subtype
 * @member {String} subtype
 */
UserDefinedEvents.prototype.subtype = undefined;

/**
 * @member {module:model/UserDefinedEventsRelations} relations
 */
UserDefinedEvents.prototype.relations = undefined;

