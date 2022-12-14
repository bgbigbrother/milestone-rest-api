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
 * The LicenseInstalledProducts model module.
 * @module model/LicenseInstalledProducts
 * @version 1.0.0
 */
export class LicenseInstalledProducts {
  /**
   * Constructs a new <code>LicenseInstalledProducts</code>.
   * Installed product license information
   * @alias module:model/LicenseInstalledProducts
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LicenseInstalledProducts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseInstalledProducts} obj Optional instance to populate.
   * @return {module:model/LicenseInstalledProducts} The populated <code>LicenseInstalledProducts</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LicenseInstalledProducts();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('productDisplayName'))
        obj.productDisplayName = ApiClient.convertToType(data['productDisplayName'], 'String');
      if (data.hasOwnProperty('pluginId'))
        obj.pluginId = ApiClient.convertToType(data['pluginId'], 'String');
      if (data.hasOwnProperty('slc'))
        obj.slc = ApiClient.convertToType(data['slc'], 'String');
      if (data.hasOwnProperty('expirationDate'))
        obj.expirationDate = ApiClient.convertToType(data['expirationDate'], 'String');
      if (data.hasOwnProperty('carePlus'))
        obj.carePlus = ApiClient.convertToType(data['carePlus'], 'String');
      if (data.hasOwnProperty('carePremium'))
        obj.carePremium = ApiClient.convertToType(data['carePremium'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
LicenseInstalledProducts.prototype.displayName = undefined;

/**
 * Product name
 * @member {String} productDisplayName
 */
LicenseInstalledProducts.prototype.productDisplayName = undefined;

/**
 * Plug-in ID
 * @member {String} pluginId
 */
LicenseInstalledProducts.prototype.pluginId = undefined;

/**
 * Software License Code
 * @member {String} slc
 */
LicenseInstalledProducts.prototype.slc = undefined;

/**
 * Expiration date
 * @member {String} expirationDate
 */
LicenseInstalledProducts.prototype.expirationDate = undefined;

/**
 * Milestone Care Plus
 * @member {String} carePlus
 */
LicenseInstalledProducts.prototype.carePlus = undefined;

/**
 * Milestone Care Premium
 * @member {String} carePremium
 */
LicenseInstalledProducts.prototype.carePremium = undefined;

