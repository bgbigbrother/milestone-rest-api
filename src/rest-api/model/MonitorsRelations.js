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
import {MonitorsRelationsParent} from './MonitorsRelationsParent';
import {MonitorsRelationsSelf} from './MonitorsRelationsSelf';

/**
 * The MonitorsRelations model module.
 * @module model/MonitorsRelations
 * @version 1.0.0
 */
export class MonitorsRelations {
  /**
   * Constructs a new <code>MonitorsRelations</code>.
   * @alias module:model/MonitorsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MonitorsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitorsRelations} obj Optional instance to populate.
   * @return {module:model/MonitorsRelations} The populated <code>MonitorsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MonitorsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = MonitorsRelationsSelf.constructFromObject(data['self']);
      if (data.hasOwnProperty('parent'))
        obj.parent = MonitorsRelationsParent.constructFromObject(data['parent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MonitorsRelationsSelf} self
 */
MonitorsRelations.prototype.self = undefined;

/**
 * @member {module:model/MonitorsRelationsParent} parent
 */
MonitorsRelations.prototype.parent = undefined;

