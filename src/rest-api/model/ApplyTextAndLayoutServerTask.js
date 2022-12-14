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
import {PathLayouts} from './PathLayouts';

/**
 * The ApplyTextAndLayoutServerTask model module.
 * @module model/ApplyTextAndLayoutServerTask
 * @version 1.0.0
 */
export class ApplyTextAndLayoutServerTask {
  /**
   * Constructs a new <code>ApplyTextAndLayoutServerTask</code>.
   * Apply text and layout
   * @alias module:model/ApplyTextAndLayoutServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ApplyTextAndLayoutServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplyTextAndLayoutServerTask} obj Optional instance to populate.
   * @return {module:model/ApplyTextAndLayoutServerTask} The populated <code>ApplyTextAndLayoutServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ApplyTextAndLayoutServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('textMessage'))
        obj.textMessage = ApiClient.convertToType(data['textMessage'], 'String');
      if (data.hasOwnProperty('beginPosition'))
        obj.beginPosition = ApiClient.convertToType(data['beginPosition'], 'Number');
      if (data.hasOwnProperty('layoutPath'))
        obj.layoutPath = PathLayouts.constructFromObject(data['layoutPath']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
ApplyTextAndLayoutServerTask.prototype.displayName = undefined;

/**
 * Text message. The text message to be shown in the view item
 * @member {String} textMessage
 */
ApplyTextAndLayoutServerTask.prototype.textMessage = undefined;

/**
 * Insert from position. Index in view to insert from
 * @member {Number} beginPosition
 */
ApplyTextAndLayoutServerTask.prototype.beginPosition = undefined;

/**
 * @member {module:model/PathLayouts} layoutPath
 */
ApplyTextAndLayoutServerTask.prototype.layoutPath = undefined;

// Implement OneOfinlineResponse200115Result interface:
