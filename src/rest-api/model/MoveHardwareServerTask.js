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
 * The MoveHardwareServerTask model module.
 * @module model/MoveHardwareServerTask
 * @version 1.0.0
 */
export class MoveHardwareServerTask {
  /**
   * Constructs a new <code>MoveHardwareServerTask</code>.
   * Move hardware
   * @alias module:model/MoveHardwareServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MoveHardwareServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveHardwareServerTask} obj Optional instance to populate.
   * @return {module:model/MoveHardwareServerTask} The populated <code>MoveHardwareServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MoveHardwareServerTask();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('destinationRecordingServer'))
        obj.destinationRecordingServer = ApiClient.convertToType(data['destinationRecordingServer'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
MoveHardwareServerTask.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
MoveHardwareServerTask.prototype.displayName = undefined;

/**
 * Allowed values for the <code>destinationRecordingServer</code> property.
 * @enum {String}
 * @readonly
 */
MoveHardwareServerTask.DestinationRecordingServerEnum = {
  /**
   * value: "RecordingServer[B99486C4-D289-403C-A2E3-E9E61CA3799C]"
   * @const
   */
  recordingServerB99486C4D289403CA2E3E9E61CA3799C: "RecordingServer[B99486C4-D289-403C-A2E3-E9E61CA3799C]"
};
/**
 * Destination recording server. The recording server that the hardware device is moved to. Value map to display names:  RecordingServer[B99486C4-D289-403C-A2E3-E9E61CA3799C]=DKTA-0818SK0059   
 * @member {module:model/MoveHardwareServerTask.DestinationRecordingServerEnum} destinationRecordingServer
 */
MoveHardwareServerTask.prototype.destinationRecordingServer = undefined;

// Implement OneOfinlineResponse20066Result interface:
