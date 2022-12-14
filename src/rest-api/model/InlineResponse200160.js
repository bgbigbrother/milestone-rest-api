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
import {Streams} from './Streams';

/**
 * The InlineResponse200160 model module.
 * @module model/InlineResponse200160
 * @version 1.0.0
 */
export class InlineResponse200160 {
  /**
   * Constructs a new <code>InlineResponse200160</code>.
   * @alias module:model/InlineResponse200160
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200160</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200160} obj Optional instance to populate.
   * @return {module:model/InlineResponse200160} The populated <code>InlineResponse200160</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200160();
      if (data.hasOwnProperty('data'))
        obj.data = Streams.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Streams} data
 */
InlineResponse200160.prototype.data = undefined;

