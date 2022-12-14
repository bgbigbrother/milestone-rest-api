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
import {MicrophoneGroupsRelationsSelf} from './MicrophoneGroupsRelationsSelf';

/**
 * The MicrophoneGroupsRelations model module.
 * @module model/MicrophoneGroupsRelations
 * @version 1.0.0
 */
export class MicrophoneGroupsRelations {
  /**
   * Constructs a new <code>MicrophoneGroupsRelations</code>.
   * @alias module:model/MicrophoneGroupsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MicrophoneGroupsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MicrophoneGroupsRelations} obj Optional instance to populate.
   * @return {module:model/MicrophoneGroupsRelations} The populated <code>MicrophoneGroupsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MicrophoneGroupsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = MicrophoneGroupsRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MicrophoneGroupsRelationsSelf} self
 */
MicrophoneGroupsRelations.prototype.self = undefined;

