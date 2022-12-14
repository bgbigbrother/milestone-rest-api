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
import {InputEventGroupsRelationsSelf} from './InputEventGroupsRelationsSelf';

/**
 * The InputEventGroupsRelations model module.
 * @module model/InputEventGroupsRelations
 * @version 1.0.0
 */
export class InputEventGroupsRelations {
  /**
   * Constructs a new <code>InputEventGroupsRelations</code>.
   * @alias module:model/InputEventGroupsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InputEventGroupsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InputEventGroupsRelations} obj Optional instance to populate.
   * @return {module:model/InputEventGroupsRelations} The populated <code>InputEventGroupsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InputEventGroupsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = InputEventGroupsRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/InputEventGroupsRelationsSelf} self
 */
InputEventGroupsRelations.prototype.self = undefined;

