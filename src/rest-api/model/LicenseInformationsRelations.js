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
import {LicenseInformationsRelationsSelf} from './LicenseInformationsRelationsSelf';

/**
 * The LicenseInformationsRelations model module.
 * @module model/LicenseInformationsRelations
 * @version 1.0.0
 */
export class LicenseInformationsRelations {
  /**
   * Constructs a new <code>LicenseInformationsRelations</code>.
   * @alias module:model/LicenseInformationsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LicenseInformationsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseInformationsRelations} obj Optional instance to populate.
   * @return {module:model/LicenseInformationsRelations} The populated <code>LicenseInformationsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LicenseInformationsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = LicenseInformationsRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/LicenseInformationsRelationsSelf} self
 */
LicenseInformationsRelations.prototype.self = undefined;

