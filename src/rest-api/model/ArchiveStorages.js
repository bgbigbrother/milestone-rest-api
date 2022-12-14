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
import {ArchiveSchedules} from './ArchiveSchedules';
import {ArchiveStoragesRelations} from './ArchiveStoragesRelations';

/**
 * The ArchiveStorages model module.
 * @module model/ArchiveStorages
 * @version 1.0.0
 */
export class ArchiveStorages {
  /**
   * Constructs a new <code>ArchiveStorages</code>.
   * Archives
   * @alias module:model/ArchiveStorages
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ArchiveStorages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArchiveStorages} obj Optional instance to populate.
   * @return {module:model/ArchiveStorages} The populated <code>ArchiveStorages</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ArchiveStorages();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'String');
      if (data.hasOwnProperty('lastModified'))
        obj.lastModified = ApiClient.convertToType(data['lastModified'], 'String');
      if (data.hasOwnProperty('diskPath'))
        obj.diskPath = ApiClient.convertToType(data['diskPath'], 'String');
      if (data.hasOwnProperty('retainMinutes'))
        obj.retainMinutes = ApiClient.convertToType(data['retainMinutes'], 'Number');
      if (data.hasOwnProperty('maxSize'))
        obj.maxSize = ApiClient.convertToType(data['maxSize'], 'Number');
      if (data.hasOwnProperty('framerateReductionEnabled'))
        obj.framerateReductionEnabled = ApiClient.convertToType(data['framerateReductionEnabled'], 'Boolean');
      if (data.hasOwnProperty('targetFramerate'))
        obj.targetFramerate = ApiClient.convertToType(data['targetFramerate'], 'Number');
      if (data.hasOwnProperty('archiveSchedules'))
        obj.archiveSchedules = ArchiveSchedules.constructFromObject(data['archiveSchedules']);
      if (data.hasOwnProperty('relations'))
        obj.relations = ArchiveStoragesRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
ArchiveStorages.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
ArchiveStorages.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
ArchiveStorages.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
ArchiveStorages.prototype.description = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
ArchiveStorages.prototype.createdDate = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
ArchiveStorages.prototype.lastModified = undefined;

/**
 * Path. The path to the archive
 * @member {String} diskPath
 */
ArchiveStorages.prototype.diskPath = undefined;

/**
 * Retention time. The number of minutes that must elapse before data are deleted or archived. The default value is 1 day
 * @member {Number} retainMinutes
 */
ArchiveStorages.prototype.retainMinutes = undefined;

/**
 * Maximum size. The maximum size of the archive storage in MB. The default value is 1 GB
 * @member {Number} maxSize
 */
ArchiveStorages.prototype.maxSize = undefined;

/**
 * Frame reduction enabled. Specifies if frame rate reduction is enabled or not on the archive
 * @member {Boolean} framerateReductionEnabled
 */
ArchiveStorages.prototype.framerateReductionEnabled = undefined;

/**
 * Frame rate. The frame rate reduction of media data in frames per second
 * @member {Number} targetFramerate
 */
ArchiveStorages.prototype.targetFramerate = undefined;

/**
 * @member {module:model/ArchiveSchedules} archiveSchedules
 */
ArchiveStorages.prototype.archiveSchedules = undefined;

/**
 * @member {module:model/ArchiveStoragesRelations} relations
 */
ArchiveStorages.prototype.relations = undefined;

