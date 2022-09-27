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
 * The UpdateSaveSearchServerTask model module.
 * @module model/UpdateSaveSearchServerTask
 * @version 1.0.0
 */
export class UpdateSaveSearchServerTask {
  /**
   * Constructs a new <code>UpdateSaveSearchServerTask</code>.
   * Edit search
   * @alias module:model/UpdateSaveSearchServerTask
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateSaveSearchServerTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateSaveSearchServerTask} obj Optional instance to populate.
   * @return {module:model/UpdateSaveSearchServerTask} The populated <code>UpdateSaveSearchServerTask</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateSaveSearchServerTask();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('searchQuery'))
        obj.searchQuery = ApiClient.convertToType(data['searchQuery'], 'String');
      if (data.hasOwnProperty('availability'))
        obj.availability = ApiClient.convertToType(data['availability'], 'String');
      if (data.hasOwnProperty('includesScopeItems'))
        obj.includesScopeItems = ApiClient.convertToType(data['includesScopeItems'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
UpdateSaveSearchServerTask.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
UpdateSaveSearchServerTask.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
UpdateSaveSearchServerTask.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
UpdateSaveSearchServerTask.prototype.description = undefined;

/**
 * Search query
 * @member {String} searchQuery
 */
UpdateSaveSearchServerTask.prototype.searchQuery = undefined;

/**
 * Allowed values for the <code>availability</code> property.
 * @enum {String}
 * @readonly
 */
UpdateSaveSearchServerTask.AvailabilityEnum = {
  /**
   * value: "Private"
   * @const
   */
  _private: "Private",

  /**
   * value: "Public"
   * @const
   */
  _public: "Public"
};
/**
 * Availability. Value map to display names:  Private=Private   Public=Public   
 * @member {module:model/UpdateSaveSearchServerTask.AvailabilityEnum} availability
 */
UpdateSaveSearchServerTask.prototype.availability = undefined;

/**
 * Devices are included in the search query
 * @member {Boolean} includesScopeItems
 */
UpdateSaveSearchServerTask.prototype.includesScopeItems = undefined;

// Implement OneOfinlineResponse200144Result interface:
