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
import {GetInternalUnitPathServerTask} from './GetInternalUnitPathServerTask';

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1.0.0
 */
export class InlineResponse2003 {
  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2003();
      if (data.hasOwnProperty('result'))
        obj.result = GetInternalUnitPathServerTask.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetInternalUnitPathServerTask} result
 */
InlineResponse2003.prototype.result = undefined;
