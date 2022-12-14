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
import {GisMapLocationsRelations} from './GisMapLocationsRelations';

/**
 * The GisMapLocations model module.
 * @module model/GisMapLocations
 * @version 1.0.0
 */
export class GisMapLocations {
  /**
   * Constructs a new <code>GisMapLocations</code>.
   * GIS map locations
   * @alias module:model/GisMapLocations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GisMapLocations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GisMapLocations} obj Optional instance to populate.
   * @return {module:model/GisMapLocations} The populated <code>GisMapLocations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GisMapLocations();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('scale'))
        obj.scale = ApiClient.convertToType(data['scale'], 'Number');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('positionX'))
        obj.positionX = ApiClient.convertToType(data['positionX'], 'Number');
      if (data.hasOwnProperty('positionY'))
        obj.positionY = ApiClient.convertToType(data['positionY'], 'Number');
      if (data.hasOwnProperty('relations'))
        obj.relations = GisMapLocationsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
GisMapLocations.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
GisMapLocations.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
GisMapLocations.prototype.name = undefined;

/**
 * Scale. Defines how to scale map when going to this location. A value of 2 million will show approximately an area of 300x300 kilometers / 200x200 miles.  A value of 2000 will show approximately a city block.
 * @member {Number} scale
 */
GisMapLocations.prototype.scale = undefined;

/**
 * Color. Define the color of the marker. Value is a string formatted with a leading hash sign. Default value is a red marked with value #FFFF5611
 * @member {String} color
 */
GisMapLocations.prototype.color = undefined;

/**
 * Longitude. Contains the longitude value as a double, e.g. -74.0 for New York and is culture invariant always using decimal point.
 * @member {Number} positionX
 */
GisMapLocations.prototype.positionX = undefined;

/**
 * Latitude. Contains the latitude value as a double, e.g. 40.716 for New York, and is culture invariant always using decimal point.
 * @member {Number} positionY
 */
GisMapLocations.prototype.positionY = undefined;

/**
 * @member {module:model/GisMapLocationsRelations} relations
 */
GisMapLocations.prototype.relations = undefined;

