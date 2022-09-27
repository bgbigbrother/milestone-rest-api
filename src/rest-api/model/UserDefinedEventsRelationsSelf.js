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

/**
 * The UserDefinedEventsRelationsSelf model module.
 * @module model/UserDefinedEventsRelationsSelf
 * @version 1.0.0
 */
export class UserDefinedEventsRelationsSelf {
  /**
   * Constructs a new <code>UserDefinedEventsRelationsSelf</code>.
   * @alias module:model/UserDefinedEventsRelationsSelf
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserDefinedEventsRelationsSelf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDefinedEventsRelationsSelf} obj Optional instance to populate.
   * @return {module:model/UserDefinedEventsRelationsSelf} The populated <code>UserDefinedEventsRelationsSelf</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserDefinedEventsRelationsSelf();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
UserDefinedEventsRelationsSelf.prototype.type = undefined;

/**
 * @member {String} id
 */
UserDefinedEventsRelationsSelf.prototype.id = undefined;
