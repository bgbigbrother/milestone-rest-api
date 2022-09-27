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
 * The AddRoleMemberServerTask model module.
 * @module model/AddRoleMemberServerTask
 * @version 1.0.0
 */
export class AddRoleMemberServerTask {
  /**
   * Constructs a new <code>AddRoleMemberServerTask</code>.
   * Add new user or group to role
   * @alias module:model/AddRoleMemberServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddRoleMemberServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddRoleMemberServerTask} obj Optional instance to populate.
   * @return {module:model/AddRoleMemberServerTask} The populated <code>AddRoleMemberServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddRoleMemberServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('sid'))
        obj.sid = ApiClient.convertToType(data['sid'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
AddRoleMemberServerTask.prototype.displayName = undefined;

/**
 * SID
 * @member {String} sid
 */
AddRoleMemberServerTask.prototype.sid = undefined;

// Implement OneOfinlineResponse200140Result interface:
