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
 * The PatrollingEntries model module.
 * @module model/PatrollingEntries
 * @version 1.0.0
 */
export class PatrollingEntries {
  /**
   * Constructs a new <code>PatrollingEntries</code>.
   * Patrolling entry
   * @alias module:model/PatrollingEntries
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PatrollingEntries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatrollingEntries} obj Optional instance to populate.
   * @return {module:model/PatrollingEntries} The populated <code>PatrollingEntries</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatrollingEntries();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('order'))
        obj.order = ApiClient.convertToType(data['order'], 'Number');
      if (data.hasOwnProperty('presetId'))
        obj.presetId = ApiClient.convertToType(data['presetId'], 'String');
      if (data.hasOwnProperty('waitTime'))
        obj.waitTime = ApiClient.convertToType(data['waitTime'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
PatrollingEntries.prototype.displayName = undefined;

/**
 * Order. Defines the order in which the presets are used. Value from 0 to x.
 * @member {Number} order
 */
PatrollingEntries.prototype.order = undefined;

/**
 * Allowed values for the <code>presetId</code> property.
 * @enum {String}
 * @readonly
 */
PatrollingEntries.PresetIdEnum = {
  /**
   * value: "c25bd736-7da0-489f-90b6-215746fb845f"
   * @const
   */
  c25bd7367da0489f90b6215746fb845f: "c25bd736-7da0-489f-90b6-215746fb845f",

  /**
   * value: "6512d13a-7404-44ff-8e01-cb028b3c2111"
   * @const
   */
  _6512d13a740444ff8e01Cb028b3c2111: "6512d13a-7404-44ff-8e01-cb028b3c2111"
};
/**
 * Preset ID. . Value map to display names:  c25bd736-7da0-489f-90b6-215746fb845f=Ptz Preset 1   6512d13a-7404-44ff-8e01-cb028b3c2111=Ptz Preset 2   
 * @member {module:model/PatrollingEntries.PresetIdEnum} presetId
 */
PatrollingEntries.prototype.presetId = undefined;

/**
 * Wait time. The number of seconds the camera should stay at this preset position
 * @member {Number} waitTime
 */
PatrollingEntries.prototype.waitTime = undefined;
