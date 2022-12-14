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
 * The PathLayouts model module.
 * @module model/PathLayouts
 * @version 1.0.0
 */
export class PathLayouts {
  /**
   * Constructs a new <code>PathLayouts</code>.
   * Layout path. Path of layout to apply to monitor
   * @alias module:model/PathLayouts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PathLayouts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathLayouts} obj Optional instance to populate.
   * @return {module:model/PathLayouts} The populated <code>PathLayouts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PathLayouts();
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
PathLayouts.prototype.type = undefined;

/**
 * @member {String} id
 */
PathLayouts.prototype.id = undefined;

