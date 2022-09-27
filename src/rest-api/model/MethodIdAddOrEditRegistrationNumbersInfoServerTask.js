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
 * The MethodIdAddOrEditRegistrationNumbersInfoServerTask model module.
 * @module model/MethodIdAddOrEditRegistrationNumbersInfoServerTask
 * @version 1.0.0
 */
export class MethodIdAddOrEditRegistrationNumbersInfoServerTask {
  /**
   * Constructs a new <code>MethodIdAddOrEditRegistrationNumbersInfoServerTask</code>.
   * Add or edit data for registration numbers
   * @alias module:model/MethodIdAddOrEditRegistrationNumbersInfoServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MethodIdAddOrEditRegistrationNumbersInfoServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MethodIdAddOrEditRegistrationNumbersInfoServerTask} obj Optional instance to populate.
   * @return {module:model/MethodIdAddOrEditRegistrationNumbersInfoServerTask} The populated <code>MethodIdAddOrEditRegistrationNumbersInfoServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MethodIdAddOrEditRegistrationNumbersInfoServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('registrationNumbers'))
        obj.registrationNumbers = ApiClient.convertToType(data['registrationNumbers'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
MethodIdAddOrEditRegistrationNumbersInfoServerTask.prototype.displayName = undefined;

/**
 * Semicolon separated list of lists of data for registration numbers. Custom fields are separated with a comma
 * @member {String} registrationNumbers
 */
MethodIdAddOrEditRegistrationNumbersInfoServerTask.prototype.registrationNumbers = undefined;

// Implement OneOfinlineResponse20099Result interface: