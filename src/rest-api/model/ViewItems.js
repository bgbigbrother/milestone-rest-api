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

/**
 * The ViewItems model module.
 * @module model/ViewItems
 * @version 1.0.0
 */
export class ViewItems {
  /**
   * Constructs a new <code>ViewItems</code>.
   * @alias module:model/ViewItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ViewItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ViewItems} obj Optional instance to populate.
   * @return {module:model/ViewItems} The populated <code>ViewItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ViewItems();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('viewItemPosition'))
        obj.viewItemPosition = ApiClient.convertToType(data['viewItemPosition'], 'Number');
      if (data.hasOwnProperty('viewItemDefinitionXml'))
        obj.viewItemDefinitionXml = ApiClient.convertToType(data['viewItemDefinitionXml'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
ViewItems.prototype.displayName = undefined;

/**
 * Position
 * @member {Number} viewItemPosition
 */
ViewItems.prototype.viewItemPosition = undefined;

/**
 * ViewItem definition (xml)
 * @member {String} viewItemDefinitionXml
 */
ViewItems.prototype.viewItemDefinitionXml = undefined;

