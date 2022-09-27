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
import {Error400Details} from './Error400Details';

/**
 * The Error400 model module.
 * @module model/Error400
 * @version 1.0.0
 */
export class Error400 {
  /**
   * Constructs a new <code>Error400</code>.
   * @alias module:model/Error400
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Error400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error400} obj Optional instance to populate.
   * @return {module:model/Error400} The populated <code>Error400</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error400();
      if (data.hasOwnProperty('httpCode'))
        obj.httpCode = ApiClient.convertToType(data['httpCode'], 'Number');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], [Error400Details]);
    }
    return obj;
  }
}

/**
 * @member {Number} httpCode
 */
Error400.prototype.httpCode = undefined;

/**
 * @member {Array.<module:model/Error400Details>} details
 */
Error400.prototype.details = undefined;

