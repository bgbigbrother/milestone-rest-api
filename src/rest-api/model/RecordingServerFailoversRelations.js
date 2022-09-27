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
import {RecordingServerFailoversRelationsSelf} from './RecordingServerFailoversRelationsSelf';

/**
 * The RecordingServerFailoversRelations model module.
 * @module model/RecordingServerFailoversRelations
 * @version 1.0.0
 */
export class RecordingServerFailoversRelations {
  /**
   * Constructs a new <code>RecordingServerFailoversRelations</code>.
   * @alias module:model/RecordingServerFailoversRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RecordingServerFailoversRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordingServerFailoversRelations} obj Optional instance to populate.
   * @return {module:model/RecordingServerFailoversRelations} The populated <code>RecordingServerFailoversRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecordingServerFailoversRelations();
      if (data.hasOwnProperty('self'))
        obj.self = RecordingServerFailoversRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = HardwareRelationsParent.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RecordingServerFailoversRelationsSelf} self
 */
RecordingServerFailoversRelations.prototype.self = undefined;

/**
 * @member {module:model/HardwareRelationsParent} parent
 */
RecordingServerFailoversRelations.prototype.parent = undefined;

