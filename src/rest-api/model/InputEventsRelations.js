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
import {CamerasRelationsParent} from './CamerasRelationsParent';
import {InputEventsRelationsSelf} from './InputEventsRelationsSelf';

/**
 * The InputEventsRelations model module.
 * @module model/InputEventsRelations
 * @version 1.0.0
 */
export class InputEventsRelations {
  /**
   * Constructs a new <code>InputEventsRelations</code>.
   * @alias module:model/InputEventsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InputEventsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InputEventsRelations} obj Optional instance to populate.
   * @return {module:model/InputEventsRelations} The populated <code>InputEventsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InputEventsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = InputEventsRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = CamerasRelationsParent.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/InputEventsRelationsSelf} self
 */
InputEventsRelations.prototype.self = undefined;

/**
 * @member {module:model/CamerasRelationsParent} parent
 */
InputEventsRelations.prototype.parent = undefined;

