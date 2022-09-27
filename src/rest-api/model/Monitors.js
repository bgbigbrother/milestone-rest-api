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
import {MonitorsRelations} from './MonitorsRelations';

/**
 * The Monitors model module.
 * @module model/Monitors
 * @version 1.0.0
 */
export class Monitors {
  /**
   * Constructs a new <code>Monitors</code>.
   * Monitor
   * @alias module:model/Monitors
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Monitors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Monitors} obj Optional instance to populate.
   * @return {module:model/Monitors} The populated <code>Monitors</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Monitors();
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
      if (data.hasOwnProperty('aspectRatio'))
        obj.aspectRatio = ApiClient.convertToType(data['aspectRatio'], 'String');
      if (data.hasOwnProperty('emptyViewItems'))
        obj.emptyViewItems = ApiClient.convertToType(data['emptyViewItems'], 'String');
      if (data.hasOwnProperty('insertionMethod'))
        obj.insertionMethod = ApiClient.convertToType(data['insertionMethod'], 'String');
      if (data.hasOwnProperty('locationX'))
        obj.locationX = ApiClient.convertToType(data['locationX'], 'Number');
      if (data.hasOwnProperty('locationY'))
        obj.locationY = ApiClient.convertToType(data['locationY'], 'Number');
      if (data.hasOwnProperty('monitorSize'))
        obj.monitorSize = ApiClient.convertToType(data['monitorSize'], 'Number');
      if (data.hasOwnProperty('noLayout'))
        obj.noLayout = ApiClient.convertToType(data['noLayout'], 'String');
      if (data.hasOwnProperty('monitorState'))
        obj.monitorState = ApiClient.convertToType(data['monitorState'], 'String');
      if (data.hasOwnProperty('relations'))
        obj.relations = MonitorsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
Monitors.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
Monitors.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
Monitors.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
Monitors.prototype.description = undefined;

/**
 * Last modified
 * @member {String} lastModified
 */
Monitors.prototype.lastModified = undefined;

/**
 * Created date
 * @member {String} createdDate
 */
Monitors.prototype.createdDate = undefined;

/**
 * Allowed values for the <code>aspectRatio</code> property.
 * @enum {String}
 * @readonly
 */
Monitors.AspectRatioEnum = {
  /**
   * value: "Aspect16x9"
   * @const
   */
  aspect16x9: "Aspect16x9",

  /**
   * value: "Aspect4x3"
   * @const
   */
  aspect4x3: "Aspect4x3"
};
/**
 * Aspect ratio. Value map to display names:  Aspect16x9=Aspect16x9   Aspect4x3=Aspect4x3   
 * @member {module:model/Monitors.AspectRatioEnum} aspectRatio
 */
Monitors.prototype.aspectRatio = undefined;

/**
 * Allowed values for the <code>emptyViewItems</code> property.
 * @enum {String}
 * @readonly
 */
Monitors.EmptyViewItemsEnum = {
  /**
   * value: "Preserve"
   * @const
   */
  preserve: "Preserve",

  /**
   * value: "Clear"
   * @const
   */
  clear: "Clear"
};
/**
 * Empty preset item. What to show in an empty preset layout item. Value map to display names:  Preserve=Preserve   Clear=Clear   
 * @member {module:model/Monitors.EmptyViewItemsEnum} emptyViewItems
 */
Monitors.prototype.emptyViewItems = undefined;

/**
 * Allowed values for the <code>insertionMethod</code> property.
 * @enum {String}
 * @readonly
 */
Monitors.InsertionMethodEnum = {
  /**
   * value: "Linked"
   * @const
   */
  linked: "Linked",

  /**
   * value: "Independent"
   * @const
   */
  independent: "Independent"
};
/**
 * Element insertion. Value map to display names:  Linked=Linked   Independent=Independent   
 * @member {module:model/Monitors.InsertionMethodEnum} insertionMethod
 */
Monitors.prototype.insertionMethod = undefined;

/**
 * Location X coordinate. X coordinate of monitor upper left corner
 * @member {Number} locationX
 */
Monitors.prototype.locationX = undefined;

/**
 * Location Y coordinate. Y coordinate of monitor upper left corner
 * @member {Number} locationY
 */
Monitors.prototype.locationY = undefined;

/**
 * Size. Size of monitor in inches
 * @member {Number} monitorSize
 */
Monitors.prototype.monitorSize = undefined;

/**
 * Allowed values for the <code>noLayout</code> property.
 * @enum {String}
 * @readonly
 */
Monitors.NoLayoutEnum = {
  /**
   * value: "Preserve"
   * @const
   */
  preserve: "Preserve",

  /**
   * value: "Clear"
   * @const
   */
  clear: "Clear"
};
/**
 * Empty preset. What to show in an empty preset layout. Value map to display names:  Preserve=Preserve   Clear=Clear   
 * @member {module:model/Monitors.NoLayoutEnum} noLayout
 */
Monitors.prototype.noLayout = undefined;

/**
 * Monitor state. Current monitor state
 * @member {String} monitorState
 */
Monitors.prototype.monitorState = undefined;

/**
 * @member {module:model/MonitorsRelations} relations
 */
Monitors.prototype.relations = undefined;

