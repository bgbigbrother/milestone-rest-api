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
import {HardwareDriversRelations} from './HardwareDriversRelations';

/**
 * The HardwareDrivers model module.
 * @module model/HardwareDrivers
 * @version 1.0.0
 */
export class HardwareDrivers {
  /**
   * Constructs a new <code>HardwareDrivers</code>.
   * Drivers
   * @alias module:model/HardwareDrivers
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>HardwareDrivers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HardwareDrivers} obj Optional instance to populate.
   * @return {module:model/HardwareDrivers} The populated <code>HardwareDrivers</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HardwareDrivers();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('useCount'))
        obj.useCount = ApiClient.convertToType(data['useCount'], 'Number');
      if (data.hasOwnProperty('driverVersion'))
        obj.driverVersion = ApiClient.convertToType(data['driverVersion'], 'String');
      if (data.hasOwnProperty('driverRevision'))
        obj.driverRevision = ApiClient.convertToType(data['driverRevision'], 'String');
      if (data.hasOwnProperty('driverType'))
        obj.driverType = ApiClient.convertToType(data['driverType'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = HardwareDriversRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
HardwareDrivers.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
HardwareDrivers.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
HardwareDrivers.prototype.name = undefined;

/**
 * Driver group name
 * @member {String} groupName
 */
HardwareDrivers.prototype.groupName = undefined;

/**
 * Driver number
 * @member {Number} _number
 */
HardwareDrivers.prototype._number = undefined;

/**
 * Number of hardware using driver
 * @member {Number} useCount
 */
HardwareDrivers.prototype.useCount = undefined;

/**
 * Version
 * @member {String} driverVersion
 */
HardwareDrivers.prototype.driverVersion = undefined;

/**
 * Revision
 * @member {String} driverRevision
 */
HardwareDrivers.prototype.driverRevision = undefined;

/**
 * Allowed values for the <code>driverType</code> property.
 * @enum {String}
 * @readonly
 */
HardwareDrivers.DriverTypeEnum = {
  /**
   * value: "Unknown"
   * @const
   */
  unknown: "Unknown",

  /**
   * value: "DevicePack"
   * @const
   */
  devicePack: "DevicePack",

  /**
   * value: "InterconnectedProduct"
   * @const
   */
  interconnectedProduct: "InterconnectedProduct"
};
/**
 * Driver type. Value map to display names:  Unknown=Unknown   DevicePack=DevicePack   InterconnectedProduct=InterconnectedProduct   
 * @member {module:model/HardwareDrivers.DriverTypeEnum} driverType
 */
HardwareDrivers.prototype.driverType = undefined;

/**
 * @member {module:model/HardwareDriversRelations} relations
 */
HardwareDrivers.prototype.relations = undefined;

