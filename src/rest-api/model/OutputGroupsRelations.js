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
import {OutputGroupsRelationsSelf} from './OutputGroupsRelationsSelf';

/**
 * The OutputGroupsRelations model module.
 * @module model/OutputGroupsRelations
 * @version 1.0.0
 */
export class OutputGroupsRelations {
  /**
   * Constructs a new <code>OutputGroupsRelations</code>.
   * @alias module:model/OutputGroupsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OutputGroupsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutputGroupsRelations} obj Optional instance to populate.
   * @return {module:model/OutputGroupsRelations} The populated <code>OutputGroupsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OutputGroupsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = OutputGroupsRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OutputGroupsRelationsSelf} self
 */
OutputGroupsRelations.prototype.self = undefined;
