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
 * The InlineResponse20131 model module.
 * @module model/InlineResponse20131
 * @version 1.0.0
 */
export class InlineResponse20131 {
  /**
   * Constructs a new <code>InlineResponse20131</code>.
   * @alias module:model/InlineResponse20131
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20131</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20131} obj Optional instance to populate.
   * @return {module:model/InlineResponse20131} The populated <code>InlineResponse20131</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20131();
      if (data.hasOwnProperty('data'))
        obj.data = VideoWallPresets.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/VideoWallPresets} data
 */
InlineResponse20131.prototype.data = undefined;
