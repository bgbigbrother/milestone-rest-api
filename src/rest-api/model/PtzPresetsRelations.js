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
import {CamerasRelationsSelf} from './CamerasRelationsSelf';
import {PtzPresetsRelationsSelf} from './PtzPresetsRelationsSelf';

/**
 * The PtzPresetsRelations model module.
 * @module model/PtzPresetsRelations
 * @version 1.0.0
 */
export class PtzPresetsRelations {
  /**
   * Constructs a new <code>PtzPresetsRelations</code>.
   * @alias module:model/PtzPresetsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PtzPresetsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtzPresetsRelations} obj Optional instance to populate.
   * @return {module:model/PtzPresetsRelations} The populated <code>PtzPresetsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PtzPresetsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = PtzPresetsRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = CamerasRelationsSelf.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/PtzPresetsRelationsSelf} self
 */
PtzPresetsRelations.prototype.self = undefined;

/**
 * @member {module:model/CamerasRelationsSelf} parent
 */
PtzPresetsRelations.prototype.parent = undefined;

