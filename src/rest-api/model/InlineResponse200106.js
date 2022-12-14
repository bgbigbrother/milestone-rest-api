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
import {MicrophoneGroups} from './MicrophoneGroups';

/**
 * The InlineResponse200106 model module.
 * @module model/InlineResponse200106
 * @version 1.0.0
 */
export class InlineResponse200106 {
  /**
   * Constructs a new <code>InlineResponse200106</code>.
   * @alias module:model/InlineResponse200106
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200106</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200106} obj Optional instance to populate.
   * @return {module:model/InlineResponse200106} The populated <code>InlineResponse200106</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200106();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [MicrophoneGroups]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MicrophoneGroups>} _array
 */
InlineResponse200106.prototype._array = undefined;

