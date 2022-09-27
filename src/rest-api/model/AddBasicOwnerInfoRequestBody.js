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
 * The AddBasicOwnerInfoRequestBody model module.
 * @module model/AddBasicOwnerInfoRequestBody
 * @version 1.0.0
 */
export class AddBasicOwnerInfoRequestBody {
  /**
   * Constructs a new <code>AddBasicOwnerInfoRequestBody</code>.
   * @alias module:model/AddBasicOwnerInfoRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddBasicOwnerInfoRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddBasicOwnerInfoRequestBody} obj Optional instance to populate.
   * @return {module:model/AddBasicOwnerInfoRequestBody} The populated <code>AddBasicOwnerInfoRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddBasicOwnerInfoRequestBody();
      if (data.hasOwnProperty('tagType'))
        obj.tagType = ApiClient.convertToType(data['tagType'], 'String');
      if (data.hasOwnProperty('tagValue'))
        obj.tagValue = ApiClient.convertToType(data['tagValue'], 'String');
    }
    return obj;
  }
}

/**
 * Select tag type
 * @member {String} tagType
 */
AddBasicOwnerInfoRequestBody.prototype.tagType = undefined;

/**
 * Value of selected tag
 * @member {String} tagValue
 */
AddBasicOwnerInfoRequestBody.prototype.tagValue = undefined;

// Implement OwnerIdBody interface: