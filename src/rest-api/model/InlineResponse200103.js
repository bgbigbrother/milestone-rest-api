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
import {MetadataGroups} from './MetadataGroups';
import {ResourceList} from './ResourceList';
import {TaskList} from './TaskList';

/**
 * The InlineResponse200103 model module.
 * @module model/InlineResponse200103
 * @version 1.0.0
 */
export class InlineResponse200103 {
  /**
   * Constructs a new <code>InlineResponse200103</code>.
   * @alias module:model/InlineResponse200103
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse200103</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200103} obj Optional instance to populate.
   * @return {module:model/InlineResponse200103} The populated <code>InlineResponse200103</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200103();
      if (data.hasOwnProperty('data'))
        obj.data = MetadataGroups.constructFromObject(data['data']);
      if (data.hasOwnProperty('tasks'))
        obj.tasks = ApiClient.convertToType(data['tasks'], [TaskList]);
      if (data.hasOwnProperty('resources'))
        obj.resources = ApiClient.convertToType(data['resources'], [ResourceList]);
    }
    return obj;
  }
}

/**
 * @member {module:model/MetadataGroups} data
 */
InlineResponse200103.prototype.data = undefined;

/**
 * @member {Array.<module:model/TaskList>} tasks
 */
InlineResponse200103.prototype.tasks = undefined;

/**
 * @member {Array.<module:model/ResourceList>} resources
 */
InlineResponse200103.prototype.resources = undefined;

