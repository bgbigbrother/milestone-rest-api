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
import {RecordingServerMulticasts} from './RecordingServerMulticasts';

/**
 * The InlineResponse200128 model module.
 * @module model/InlineResponse200128
 * @version 1.0.0
 */
export class InlineResponse200128 {
  /**
   * Constructs a new <code>InlineResponse200128</code>.
   * @alias module:model/InlineResponse200128
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200128</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200128} obj Optional instance to populate.
   * @return {module:model/InlineResponse200128} The populated <code>InlineResponse200128</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200128();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [RecordingServerMulticasts]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/RecordingServerMulticasts>} _array
 */
InlineResponse200128.prototype._array = undefined;

