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
import {AudioMessagesRelationsSelf} from './AudioMessagesRelationsSelf';

/**
 * The AudioMessagesRelations model module.
 * @module model/AudioMessagesRelations
 * @version 1.0.0
 */
export class AudioMessagesRelations {
  /**
   * Constructs a new <code>AudioMessagesRelations</code>.
   * @alias module:model/AudioMessagesRelations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AudioMessagesRelations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioMessagesRelations} obj Optional instance to populate.
   * @return {module:model/AudioMessagesRelations} The populated <code>AudioMessagesRelations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AudioMessagesRelations();
      if (data.hasOwnProperty('self'))
        obj.self = AudioMessagesRelationsSelf.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AudioMessagesRelationsSelf} self
 */
AudioMessagesRelations.prototype.self = undefined;

