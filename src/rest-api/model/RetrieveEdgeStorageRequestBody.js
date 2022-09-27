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
 * The RetrieveEdgeStorageRequestBody model module.
 * @module model/RetrieveEdgeStorageRequestBody
 * @version 1.0.0
 */
export class RetrieveEdgeStorageRequestBody {
  /**
   * Constructs a new <code>RetrieveEdgeStorageRequestBody</code>.
   * @alias module:model/RetrieveEdgeStorageRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RetrieveEdgeStorageRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RetrieveEdgeStorageRequestBody} obj Optional instance to populate.
   * @return {module:model/RetrieveEdgeStorageRequestBody} The populated <code>RetrieveEdgeStorageRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RetrieveEdgeStorageRequestBody();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
    }
    return obj;
  }
}

/**
 * Start time
 * @member {String} startTime
 */
RetrieveEdgeStorageRequestBody.prototype.startTime = undefined;

/**
 * End time
 * @member {String} endTime
 */
RetrieveEdgeStorageRequestBody.prototype.endTime = undefined;

// Implement CamerasIdBody interface:
// Implement MetadataIdBody interface:
// Implement MicrophonesIdBody interface:
// Implement SpeakersIdBody interface:
