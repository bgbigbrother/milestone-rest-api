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
 * The MicrophonesIdBody model module.
 * @module model/MicrophonesIdBody
 * @version 1.0.0
 */
export class MicrophonesIdBody {
  /**
   * Constructs a new <code>MicrophonesIdBody</code>.
   * @alias module:model/MicrophonesIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MicrophonesIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MicrophonesIdBody} obj Optional instance to populate.
   * @return {module:model/MicrophonesIdBody} The populated <code>MicrophonesIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MicrophonesIdBody();
    }
    return obj;
  }
}
