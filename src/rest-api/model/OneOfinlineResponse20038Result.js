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
 * The OneOfinlineResponse20038Result model module.
 * @module model/OneOfinlineResponse20038Result
 * @version 1.0.0
 */
export class OneOfinlineResponse20038Result {
  /**
   * Constructs a new <code>OneOfinlineResponse20038Result</code>.
   * @alias module:model/OneOfinlineResponse20038Result
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfinlineResponse20038Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfinlineResponse20038Result} obj Optional instance to populate.
   * @return {module:model/OneOfinlineResponse20038Result} The populated <code>OneOfinlineResponse20038Result</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfinlineResponse20038Result();
    }
    return obj;
  }
}
