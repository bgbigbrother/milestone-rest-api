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
import {VideoWallPresets} from './VideoWallPresets';

/**
 * The InlineResponse200177 model module.
 * @module model/InlineResponse200177
 * @version 1.0.0
 */
export class InlineResponse200177 {
  /**
   * Constructs a new <code>InlineResponse200177</code>.
   * @alias module:model/InlineResponse200177
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200177</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200177} obj Optional instance to populate.
   * @return {module:model/InlineResponse200177} The populated <code>InlineResponse200177</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200177();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [VideoWallPresets]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/VideoWallPresets>} _array
 */
InlineResponse200177.prototype._array = undefined;

