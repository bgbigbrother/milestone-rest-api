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
 * The CopyRoleRequestBody model module.
 * @module model/CopyRoleRequestBody
 * @version 1.0.0
 */
export class CopyRoleRequestBody {
  /**
   * Constructs a new <code>CopyRoleRequestBody</code>.
   * @alias module:model/CopyRoleRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CopyRoleRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CopyRoleRequestBody} obj Optional instance to populate.
   * @return {module:model/CopyRoleRequestBody} The populated <code>CopyRoleRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CopyRoleRequestBody();
      if (data.hasOwnProperty('itemSelection'))
        obj.itemSelection = ApiClient.convertToType(data['itemSelection'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * Copy role
 * @member {String} itemSelection
 */
CopyRoleRequestBody.prototype.itemSelection = undefined;

/**
 * Name
 * @member {String} name
 */
CopyRoleRequestBody.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
CopyRoleRequestBody.prototype.description = undefined;

// Implement RolesBody interface: