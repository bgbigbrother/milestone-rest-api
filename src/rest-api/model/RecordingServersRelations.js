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
import {HardwareRelationsParent} from './HardwareRelationsParent';

/**
 * The RecordingServersRelations model module.
 * @module model/RecordingServersRelations
 * @version 1.0.0
 */
export class RecordingServersRelations {
  /**
   * Constructs a new <code>RecordingServersRelations</code>.
   * @alias module:model/RecordingServersRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RecordingServersRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordingServersRelations} obj Optional instance to populate.
   * @return {module:model/RecordingServersRelations} The populated <code>RecordingServersRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecordingServersRelations();
      if (data.hasOwnProperty('self'))
        obj.self = HardwareRelationsParent.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/HardwareRelationsParent} self
 */
RecordingServersRelations.prototype.self = undefined;

