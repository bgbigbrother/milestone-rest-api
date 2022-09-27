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
import {PatrollingEntries} from './PatrollingEntries';
import {PatrollingProfilesRelations} from './PatrollingProfilesRelations';

/**
 * The PatrollingProfiles model module.
 * @module model/PatrollingProfiles
 * @version 1.0.0
 */
export class PatrollingProfiles {
  /**
   * Constructs a new <code>PatrollingProfiles</code>.
   * Patrolling profile
   * @alias module:model/PatrollingProfiles
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PatrollingProfiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatrollingProfiles} obj Optional instance to populate.
   * @return {module:model/PatrollingProfiles} The populated <code>PatrollingProfiles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PatrollingProfiles();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('customizeTransitions'))
        obj.customizeTransitions = ApiClient.convertToType(data['customizeTransitions'], 'Boolean');
      if (data.hasOwnProperty('initSpeed'))
        obj.initSpeed = ApiClient.convertToType(data['initSpeed'], 'Number');
      if (data.hasOwnProperty('initTransitionTime'))
        obj.initTransitionTime = ApiClient.convertToType(data['initTransitionTime'], 'Number');
      if (data.hasOwnProperty('endPresetId'))
        obj.endPresetId = ApiClient.convertToType(data['endPresetId'], 'String');
      if (data.hasOwnProperty('endSpeed'))
        obj.endSpeed = ApiClient.convertToType(data['endSpeed'], 'Number');
      if (data.hasOwnProperty('endTransitionTime'))
        obj.endTransitionTime = ApiClient.convertToType(data['endTransitionTime'], 'Number');
      if (data.hasOwnProperty('patrollingEntries'))
        obj.patrollingEntries = PatrollingEntries.constructFromObject(data['patrollingEntries']);
      if (data.hasOwnProperty('relations'))
        obj.relations = PatrollingProfilesRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
PatrollingProfiles.prototype.displayName = undefined;

/**
 * Name
 * @member {String} name
 */
PatrollingProfiles.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
PatrollingProfiles.prototype.description = undefined;

/**
 * ID
 * @member {String} id
 */
PatrollingProfiles.prototype.id = undefined;

/**
 * Customize transitions. Indicates if transition from one preset to another should to be configured
 * @member {Boolean} customizeTransitions
 */
PatrollingProfiles.prototype.customizeTransitions = undefined;

/**
 * Initial transition: Speed. A value between 0.0 and 1.0, where 1.0 is full speed
 * @member {Number} initSpeed
 */
PatrollingProfiles.prototype.initSpeed = undefined;

/**
 * Initial transition: Transition time. The number of seconds it is expected to take for the movement to complete
 * @member {Number} initTransitionTime
 */
PatrollingProfiles.prototype.initTransitionTime = undefined;

/**
 * Allowed values for the <code>endPresetId</code> property.
 * @enum {String}
 * @readonly
 */
PatrollingProfiles.EndPresetIdEnum = {
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
 * End position: Preset. . Value map to display names:  c25bd736-7da0-489f-90b6-215746fb845f=Ptz Preset 1   6512d13a-7404-44ff-8e01-cb028b3c2111=Ptz Preset 2   
 * @member {module:model/PatrollingProfiles.EndPresetIdEnum} endPresetId
 */
PatrollingProfiles.prototype.endPresetId = undefined;

/**
 * End position: Speed. A value between 0.0 and 1.0, where 1.0 is full speed
 * @member {Number} endSpeed
 */
PatrollingProfiles.prototype.endSpeed = undefined;

/**
 * End position: Transition time. The number of seconds it is expected to take for the movement to complete
 * @member {Number} endTransitionTime
 */
PatrollingProfiles.prototype.endTransitionTime = undefined;

/**
 * @member {module:model/PatrollingEntries} patrollingEntries
 */
PatrollingProfiles.prototype.patrollingEntries = undefined;

/**
 * @member {module:model/PatrollingProfilesRelations} relations
 */
PatrollingProfiles.prototype.relations = undefined;
