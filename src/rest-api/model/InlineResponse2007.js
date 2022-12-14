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
import {AlarmDefinitions} from './AlarmDefinitions';

/**
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 1.0.0
 */
export class InlineResponse2007 {
  /**
   * Constructs a new <code>InlineResponse2007</code>.
   * @alias module:model/InlineResponse2007
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2007();
      if (data.hasOwnProperty('array'))
        obj._array = ApiClient.convertToType(data['array'], [AlarmDefinitions]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/AlarmDefinitions>} _array
 */
InlineResponse2007.prototype._array = undefined;

