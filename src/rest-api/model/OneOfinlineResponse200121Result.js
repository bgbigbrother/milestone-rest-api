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
 * The OneOfinlineResponse200121Result model module.
 * @module model/OneOfinlineResponse200121Result
 * @version 1.0.0
 */
export class OneOfinlineResponse200121Result {
  /**
   * Constructs a new <code>OneOfinlineResponse200121Result</code>.
   * @alias module:model/OneOfinlineResponse200121Result
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfinlineResponse200121Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfinlineResponse200121Result} obj Optional instance to populate.
   * @return {module:model/OneOfinlineResponse200121Result} The populated <code>OneOfinlineResponse200121Result</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfinlineResponse200121Result();
    }
    return obj;
  }
}
