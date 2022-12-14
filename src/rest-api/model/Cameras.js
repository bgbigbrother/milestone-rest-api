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
import {CamerasRelations} from './CamerasRelations';
import {PathStorages} from './PathStorages';

/**
 * The Cameras model module.
 * @module model/Cameras
 * @version 1.0.0
 */
export class Cameras {
  /**
   * Constructs a new <code>Cameras</code>.
   * Camera
   * @alias module:model/Cameras
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Cameras</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cameras} obj Optional instance to populate.
   * @return {module:model/Cameras} The populated <code>Cameras</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Cameras();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('channel'))
        obj.channel = ApiClient.convertToType(data['channel'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('gisPoint'))
        obj.gisPoint = ApiClient.convertToType(data['gisPoint'], 'String');
      if (data.hasOwnProperty('shortName'))
        obj.shortName = ApiClient.convertToType(data['shortName'], 'String');
      if (data.hasOwnProperty('icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'Number');
      if (data.hasOwnProperty('coverageDirection'))
        obj.coverageDirection = ApiClient.convertToType(data['coverageDirection'], 'Number');
      if (data.hasOwnProperty('coverageDepth'))
        obj.coverageDepth = ApiClient.convertToType(data['coverageDepth'], 'Number');
      if (data.hasOwnProperty('coverageFieldOfView'))
        obj.coverageFieldOfView = ApiClient.convertToType(data['coverageFieldOfView'], 'Number');
      if (data.hasOwnProperty('recordingFramerate'))
        obj.recordingFramerate = ApiClient.convertToType(data['recordingFramerate'], 'Number');
      if (data.hasOwnProperty('recordKeyframesOnly'))
        obj.recordKeyframesOnly = ApiClient.convertToType(data['recordKeyframesOnly'], 'Boolean');
      if (data.hasOwnProperty('recordOnRelatedDevices'))
        obj.recordOnRelatedDevices = ApiClient.convertToType(data['recordOnRelatedDevices'], 'Boolean');
      if (data.hasOwnProperty('recordingEnabled'))
        obj.recordingEnabled = ApiClient.convertToType(data['recordingEnabled'], 'Boolean');
      if (data.hasOwnProperty('prebufferEnabled'))
        obj.prebufferEnabled = ApiClient.convertToType(data['prebufferEnabled'], 'Boolean');
      if (data.hasOwnProperty('prebufferInMemory'))
        obj.prebufferInMemory = ApiClient.convertToType(data['prebufferInMemory'], 'Boolean');
      if (data.hasOwnProperty('prebufferSeconds'))
        obj.prebufferSeconds = ApiClient.convertToType(data['prebufferSeconds'], 'Number');
      if (data.hasOwnProperty('edgeStorageEnabled'))
        obj.edgeStorageEnabled = ApiClient.convertToType(data['edgeStorageEnabled'], 'Boolean');
      if (data.hasOwnProperty('edgeStoragePlaybackEnabled'))
        obj.edgeStoragePlaybackEnabled = ApiClient.convertToType(data['edgeStoragePlaybackEnabled'], 'Boolean');
      if (data.hasOwnProperty('manualRecordingTimeoutEnabled'))
        obj.manualRecordingTimeoutEnabled = ApiClient.convertToType(data['manualRecordingTimeoutEnabled'], 'Boolean');
      if (data.hasOwnProperty('manualRecordingTimeoutMinutes'))
        obj.manualRecordingTimeoutMinutes = ApiClient.convertToType(data['manualRecordingTimeoutMinutes'], 'Number');
      if (data.hasOwnProperty('recordingStorage'))
        obj.recordingStorage = PathStorages.constructFromObject(data['recordingStorage']);
      if (data.hasOwnProperty('relations'))
        obj.relations = CamerasRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
Cameras.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
Cameras.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
Cameras.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
Cameras.prototype.name = undefined;

/**
 * Channel
 * @member {Number} channel
 */
Cameras.prototype.channel = undefined;

/**
 * Description
 * @member {String} description
 */
Cameras.prototype.description = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
Cameras.prototype.createdDate = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
Cameras.prototype.lastModified = undefined;

/**
 * Device position. Device position. Position of device in longitude, latitude and potentially altitude.  The format is \"POINT (LONGITUDE LATITUDE)\" and if you want to clear the coordinates, the value to use is \"POINT EMPTY\".  Examples: \"POINT (55.656932878513 12.3763545558449)\" \"POINT EMPTY\"   Can also include altitude, if so the format is \"POINT (LONGITUDE LATITUDE ALTITUDE)\" 
 * @member {String} gisPoint
 */
Cameras.prototype.gisPoint = undefined;

/**
 * Short name. Used as name in the user interface where appropriate.
 * @member {String} shortName
 */
Cameras.prototype.shortName = undefined;

/**
 * Icon identifier. The relevant device icon to show.
 * @member {Number} icon
 */
Cameras.prototype.icon = undefined;

/**
 * Direction. Indicate the viewing direction of the device.
 * @member {Number} coverageDirection
 */
Cameras.prototype.coverageDirection = undefined;

/**
 * Depth. Indicate the viewing depth of the device.
 * @member {Number} coverageDepth
 */
Cameras.prototype.coverageDepth = undefined;

/**
 * Field of view. Indicate the field of view of the device.
 * @member {Number} coverageFieldOfView
 */
Cameras.prototype.coverageFieldOfView = undefined;

/**
 * Recording frame rate
 * @member {Number} recordingFramerate
 */
Cameras.prototype.recordingFramerate = undefined;

/**
 * Record keyframes only
 * @member {Boolean} recordKeyframesOnly
 */
Cameras.prototype.recordKeyframesOnly = undefined;

/**
 * Record on related devices
 * @member {Boolean} recordOnRelatedDevices
 */
Cameras.prototype.recordOnRelatedDevices = undefined;

/**
 * Recording enabled
 * @member {Boolean} recordingEnabled
 */
Cameras.prototype.recordingEnabled = undefined;

/**
 * Prebuffer enabled
 * @member {Boolean} prebufferEnabled
 */
Cameras.prototype.prebufferEnabled = undefined;

/**
 * Prebuffer in memory
 * @member {Boolean} prebufferInMemory
 */
Cameras.prototype.prebufferInMemory = undefined;

/**
 * Prebuffer seconds
 * @member {Number} prebufferSeconds
 */
Cameras.prototype.prebufferSeconds = undefined;

/**
 * Remote recording enabled
 * @member {Boolean} edgeStorageEnabled
 */
Cameras.prototype.edgeStorageEnabled = undefined;

/**
 * Remote recording playback
 * @member {Boolean} edgeStoragePlaybackEnabled
 */
Cameras.prototype.edgeStoragePlaybackEnabled = undefined;

/**
 * Manual recording timeout enabled
 * @member {Boolean} manualRecordingTimeoutEnabled
 */
Cameras.prototype.manualRecordingTimeoutEnabled = undefined;

/**
 * Manual recording timeout in minutes
 * @member {Number} manualRecordingTimeoutMinutes
 */
Cameras.prototype.manualRecordingTimeoutMinutes = undefined;

/**
 * @member {module:model/PathStorages} recordingStorage
 */
Cameras.prototype.recordingStorage = undefined;

/**
 * @member {module:model/CamerasRelations} relations
 */
Cameras.prototype.relations = undefined;

