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
 * The UpdateFirmwareHardwareServerTask model module.
 * @module model/UpdateFirmwareHardwareServerTask
 * @version 1.0.0
 */
export class UpdateFirmwareHardwareServerTask {
  /**
   * Constructs a new <code>UpdateFirmwareHardwareServerTask</code>.
   * Update firmware
   * @alias module:model/UpdateFirmwareHardwareServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateFirmwareHardwareServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateFirmwareHardwareServerTask} obj Optional instance to populate.
   * @return {module:model/UpdateFirmwareHardwareServerTask} The populated <code>UpdateFirmwareHardwareServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateFirmwareHardwareServerTask();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('storageId'))
        obj.storageId = ApiClient.convertToType(data['storageId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
UpdateFirmwareHardwareServerTask.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
UpdateFirmwareHardwareServerTask.prototype.displayName = undefined;

/**
 * Storage ID. The storage ID of the uploaded file
 * @member {String} storageId
 */
UpdateFirmwareHardwareServerTask.prototype.storageId = undefined;

// Implement OneOfinlineResponse20066Result interface: