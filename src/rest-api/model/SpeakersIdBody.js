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
 * The SpeakersIdBody model module.
 * @module model/SpeakersIdBody
 * @version 1.0.0
 */
export class SpeakersIdBody {
  /**
   * Constructs a new <code>SpeakersIdBody</code>.
   * @alias module:model/SpeakersIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SpeakersIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpeakersIdBody} obj Optional instance to populate.
   * @return {module:model/SpeakersIdBody} The populated <code>SpeakersIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SpeakersIdBody();
    }
    return obj;
  }
}
