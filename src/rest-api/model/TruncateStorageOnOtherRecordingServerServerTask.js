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
 * The TruncateStorageOnOtherRecordingServerServerTask model module.
 * @module model/TruncateStorageOnOtherRecordingServerServerTask
 * @version 1.0.0
 */
export class TruncateStorageOnOtherRecordingServerServerTask {
  /**
   * Constructs a new <code>TruncateStorageOnOtherRecordingServerServerTask</code>.
   * Delete all recordings for device on another recording server
   * @alias module:model/TruncateStorageOnOtherRecordingServerServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TruncateStorageOnOtherRecordingServerServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TruncateStorageOnOtherRecordingServerServerTask} obj Optional instance to populate.
   * @return {module:model/TruncateStorageOnOtherRecordingServerServerTask} The populated <code>TruncateStorageOnOtherRecordingServerServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TruncateStorageOnOtherRecordingServerServerTask();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('itemSelection'))
        obj.itemSelection = ApiClient.convertToType(data['itemSelection'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
TruncateStorageOnOtherRecordingServerServerTask.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
TruncateStorageOnOtherRecordingServerServerTask.prototype.displayName = undefined;

/**
 * Select recording server. .
 * @member {String} itemSelection
 */
TruncateStorageOnOtherRecordingServerServerTask.prototype.itemSelection = undefined;

// Implement OneOfinlineResponse20029Result interface:
