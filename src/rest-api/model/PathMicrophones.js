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
 * The PathMicrophones model module.
 * @module model/PathMicrophones
 * @version 1.0.0
 */
export class PathMicrophones {
  /**
   * Constructs a new <code>PathMicrophones</code>.
   * Related device paths. Comma separated list of device paths
   * @alias module:model/PathMicrophones
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PathMicrophones</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathMicrophones} obj Optional instance to populate.
   * @return {module:model/PathMicrophones} The populated <code>PathMicrophones</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PathMicrophones();
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
PathMicrophones.prototype.type = undefined;

/**
 * @member {String} id
 */
PathMicrophones.prototype.id = undefined;

