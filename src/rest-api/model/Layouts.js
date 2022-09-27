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
import {LayoutsRelations} from './LayoutsRelations';

/**
 * The Layouts model module.
 * @module model/Layouts
 * @version 1.0.0
 */
export class Layouts {
  /**
   * Constructs a new <code>Layouts</code>.
   * @alias module:model/Layouts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Layouts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Layouts} obj Optional instance to populate.
   * @return {module:model/Layouts} The populated <code>Layouts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Layouts();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('definitionXml'))
        obj.definitionXml = ApiClient.convertToType(data['definitionXml'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = LayoutsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
Layouts.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
Layouts.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
Layouts.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
Layouts.prototype.description = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
Layouts.prototype.lastModified = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
Layouts.prototype.createdDate = undefined;

/**
 * Definition (XML). XML defining the layout
 * @member {String} definitionXml
 */
Layouts.prototype.definitionXml = undefined;

/**
 * @member {module:model/LayoutsRelations} relations
 */
Layouts.prototype.relations = undefined;

