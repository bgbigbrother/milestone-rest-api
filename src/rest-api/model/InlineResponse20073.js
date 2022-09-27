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
import {Speakers} from './Speakers';

/**
 * The InlineResponse20073 model module.
 * @module model/InlineResponse20073
 * @version 1.0.0
 */
export class InlineResponse20073 {
  /**
   * Constructs a new <code>InlineResponse20073</code>.
   * @alias module:model/InlineResponse20073
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20073</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20073} obj Optional instance to populate.
   * @return {module:model/InlineResponse20073} The populated <code>InlineResponse20073</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20073();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [Speakers]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Speakers>} _array
 */
InlineResponse20073.prototype._array = undefined;

