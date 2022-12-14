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
import {AnalyticsEventsRelationsSelf} from './AnalyticsEventsRelationsSelf';

/**
 * The AnalyticsEventsRelations model module.
 * @module model/AnalyticsEventsRelations
 * @version 1.0.0
 */
export class AnalyticsEventsRelations {
  /**
   * Constructs a new <code>AnalyticsEventsRelations</code>.
   * @alias module:model/AnalyticsEventsRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnalyticsEventsRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsEventsRelations} obj Optional instance to populate.
   * @return {module:model/AnalyticsEventsRelations} The populated <code>AnalyticsEventsRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnalyticsEventsRelations();
      if (data.hasOwnProperty('self'))
        obj.self = AnalyticsEventsRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AnalyticsEventsRelationsSelf} self
 */
AnalyticsEventsRelations.prototype.self = undefined;

