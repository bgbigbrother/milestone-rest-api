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
import {RegisteredClaims} from './RegisteredClaims';
import {ResourceList} from './ResourceList';
import {TaskList} from './TaskList';

/**
 * The InlineResponse200134 model module.
 * @module model/InlineResponse200134
 * @version 1.0.0
 */
export class InlineResponse200134 {
  /**
   * Constructs a new <code>InlineResponse200134</code>.
   * @alias module:model/InlineResponse200134
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200134</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200134} obj Optional instance to populate.
   * @return {module:model/InlineResponse200134} The populated <code>InlineResponse200134</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200134();
      if (data.hasOwnProperty('data'))
        obj.data = RegisteredClaims.constructFromObject(data['data']);
      if (data.hasOwnProperty('tasks'))
        obj.tasks = ApiClient.convertToType(data['tasks'], [TaskList]);
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], [ResourceList]);
    }
    return obj;
  }
}

/**
 * @member {module:model/RegisteredClaims} data
 */
InlineResponse200134.prototype.data = undefined;

/**
 * @member {Array.<module:model/TaskList>} tasks
 */
InlineResponse200134.prototype.tasks = undefined;

/**
 * @member {Array.<module:model/ResourceList>} resources
 */
InlineResponse200134.prototype.resources = undefined;

