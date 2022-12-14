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
import {AudioMessages} from './AudioMessages';

/**
 * The InlineResponse2012 model module.
 * @module model/InlineResponse2012
 * @version 1.0.0
 */
export class InlineResponse2012 {
  /**
   * Constructs a new <code>InlineResponse2012</code>.
   * @alias module:model/InlineResponse2012
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2012</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2012} obj Optional instance to populate.
   * @return {module:model/InlineResponse2012} The populated <code>InlineResponse2012</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2012();
      if (data.hasOwnProperty('data'))
        obj.data = AudioMessages.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AudioMessages} data
 */
InlineResponse2012.prototype.data = undefined;

