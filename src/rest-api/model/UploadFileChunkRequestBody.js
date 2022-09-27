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
 * The UploadFileChunkRequestBody model module.
 * @module model/UploadFileChunkRequestBody
 * @version 1.0.0
 */
export class UploadFileChunkRequestBody {
  /**
   * Constructs a new <code>UploadFileChunkRequestBody</code>.
   * @alias module:model/UploadFileChunkRequestBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UploadFileChunkRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadFileChunkRequestBody} obj Optional instance to populate.
   * @return {module:model/UploadFileChunkRequestBody} The populated <code>UploadFileChunkRequestBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UploadFileChunkRequestBody();
      if (data.hasOwnProperty('transferId'))
        obj.transferId = ApiClient.convertToType(data['transferId'], 'String');
      if (data.hasOwnProperty('chunkData'))
        obj.chunkData = ApiClient.convertToType(data['chunkData'], 'String');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('checksum'))
        obj.checksum = ApiClient.convertToType(data['checksum'], 'String');
    }
    return obj;
  }
}

/**
 * Transfer ID
 * @member {String} transferId
 */
UploadFileChunkRequestBody.prototype.transferId = undefined;

/**
 * Chunk data
 * @member {String} chunkData
 */
UploadFileChunkRequestBody.prototype.chunkData = undefined;

/**
 * Offset (bytes)
 * @member {Number} offset
 */
UploadFileChunkRequestBody.prototype.offset = undefined;

/**
 * File size (bytes)
 * @member {Number} size
 */
UploadFileChunkRequestBody.prototype.size = undefined;

/**
 * Checksum
 * @member {String} checksum
 */
UploadFileChunkRequestBody.prototype.checksum = undefined;

// Implement SitesBody interface: