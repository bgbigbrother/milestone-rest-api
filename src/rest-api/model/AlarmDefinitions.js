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
import {AlarmDefinitionsRelations} from './AlarmDefinitionsRelations';
import {PathCameras} from './PathCameras';
import {PathTimeProfiles} from './PathTimeProfiles';
import {PathUserDefinedEvents} from './PathUserDefinedEvents';

/**
 * The AlarmDefinitions model module.
 * @module model/AlarmDefinitions
 * @version 1.0.0
 */
export class AlarmDefinitions {
  /**
   * Constructs a new <code>AlarmDefinitions</code>.
   * Alarm definitions
   * @alias module:model/AlarmDefinitions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AlarmDefinitions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlarmDefinitions} obj Optional instance to populate.
   * @return {module:model/AlarmDefinitions} The populated <code>AlarmDefinitions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlarmDefinitions();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('eventTypeGroup'))
        obj.eventTypeGroup = ApiClient.convertToType(data['eventTypeGroup'], 'String');
      if (data.hasOwnProperty('eventType'))
        obj.eventType = ApiClient.convertToType(data['eventType'], 'String');
      if (data.hasOwnProperty('sourceList'))
        obj.sourceList = ApiClient.convertToType(data['sourceList'], [PathUserDefinedEvents]);
      if (data.hasOwnProperty('enableRule'))
        obj.enableRule = ApiClient.convertToType(data['enableRule'], 'String');
      if (data.hasOwnProperty('timeProfile'))
        obj.timeProfile = PathTimeProfiles.constructFromObject(data['timeProfile']);
      if (data.hasOwnProperty('enableEventList'))
        obj.enableEventList = ApiClient.convertToType(data['enableEventList'], [PathUserDefinedEvents]);
      if (data.hasOwnProperty('disableEventList'))
        obj.disableEventList = ApiClient.convertToType(data['disableEventList'], [PathUserDefinedEvents]);
      if (data.hasOwnProperty('managementTimeoutTime'))
        obj.managementTimeoutTime = ApiClient.convertToType(data['managementTimeoutTime'], 'String');
      if (data.hasOwnProperty('managementTimeoutEventList'))
        obj.managementTimeoutEventList = ApiClient.convertToType(data['managementTimeoutEventList'], [PathUserDefinedEvents]);
      if (data.hasOwnProperty('relatedCameraList'))
        obj.relatedCameraList = ApiClient.convertToType(data['relatedCameraList'], [PathCameras]);
      if (data.hasOwnProperty('mapType'))
        obj.mapType = ApiClient.convertToType(data['mapType'], 'String');
      if (data.hasOwnProperty('relatedMap'))
        obj.relatedMap = ApiClient.convertToType(data['relatedMap'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('triggerEventlist'))
        obj.triggerEventlist = ApiClient.convertToType(data['triggerEventlist'], [PathUserDefinedEvents]);
      if (data.hasOwnProperty('autoClose'))
        obj.autoClose = ApiClient.convertToType(data['autoClose'], 'Boolean');
      if (data.hasOwnProperty('relations'))
        obj.relations = AlarmDefinitionsRelations.constructFromObject(data['relations']);
    }
    return obj;
  }
}

/**
 * @member {Boolean} enabled
 */
AlarmDefinitions.prototype.enabled = undefined;

/**
 * @member {String} displayName
 */
AlarmDefinitions.prototype.displayName = undefined;

/**
 * ID
 * @member {String} id
 */
AlarmDefinitions.prototype.id = undefined;

/**
 * Name
 * @member {String} name
 */
AlarmDefinitions.prototype.name = undefined;

/**
 * Description
 * @member {String} description
 */
AlarmDefinitions.prototype.description = undefined;

/**
 * Allowed values for the <code>eventTypeGroup</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.EventTypeGroupEnum = {
  /**
   * value: "1eacbcad-d566-4375-834b-cfbe3d937caa"
   * @const
   */
  _1eacbcadD5664375834bCfbe3d937caa: "1eacbcad-d566-4375-834b-cfbe3d937caa",

  /**
   * value: "6b90aee7-e6a5-4b5c-82aa-1686c19afe19"
   * @const
   */
  _6b90aee7E6a54b5c82aa1686c19afe19: "6b90aee7-e6a5-4b5c-82aa-1686c19afe19",

  /**
   * value: "b1ca6710-f244-4ce2-8daf-662e342c405a"
   * @const
   */
  b1ca6710F2444ce28daf662e342c405a: "b1ca6710-f244-4ce2-8daf-662e342c405a",

  /**
   * value: "64d2c24b-a92f-48a0-b9ca-707af7828d67"
   * @const
   */
  _64d2c24bA92f48a0B9ca707af7828d67: "64d2c24b-a92f-48a0-b9ca-707af7828d67",

  /**
   * value: "5946b6fa-44d9-4f4c-82bb-46a17b924265"
   * @const
   */
  _5946b6fa44d94f4c82bb46a17b924265: "5946b6fa-44d9-4f4c-82bb-46a17b924265",

  /**
   * value: "2fb8e979-188e-44cc-b1b7-a7ed9c91e5c0"
   * @const
   */
  _2fb8e979188e44ccB1b7A7ed9c91e5c0: "2fb8e979-188e-44cc-b1b7-a7ed9c91e5c0",

  /**
   * value: "00000000-0000-0000-0000-000000000000"
   * @const
   */
  _00000000000000000000000000000000: "00000000-0000-0000-0000-000000000000",

  /**
   * value: "1d3e945c-ecf3-49eb-85b2-3f79b8a14927"
   * @const
   */
  _1d3e945cEcf349eb85b23f79b8a14927: "1d3e945c-ecf3-49eb-85b2-3f79b8a14927",

  /**
   * value: "a96692c8-51b1-4f87-b12c-0d3d9cbfc5a4"
   * @const
   */
  a96692c851b14f87B12c0d3d9cbfc5a4: "a96692c8-51b1-4f87-b12c-0d3d9cbfc5a4"
};
/**
 * Triggering event group. Defines a group of events in the same area. Value map to display names:  1eacbcad-d566-4375-834b-cfbe3d937caa=Device Events   6b90aee7-e6a5-4b5c-82aa-1686c19afe19=Hardware Events   b1ca6710-f244-4ce2-8daf-662e342c405a=System Events   64d2c24b-a92f-48a0-b9ca-707af7828d67=Recording Server Events   5946b6fa-44d9-4f4c-82bb-46a17b924265=External Events   2fb8e979-188e-44cc-b1b7-a7ed9c91e5c0=System Monitor Events   00000000-0000-0000-0000-000000000000=Undefined   1d3e945c-ecf3-49eb-85b2-3f79b8a14927=Match lists   a96692c8-51b1-4f87-b12c-0d3d9cbfc5a4=Analytics Events   
 * @member {module:model/AlarmDefinitions.EventTypeGroupEnum} eventTypeGroup
 */
AlarmDefinitions.prototype.eventTypeGroup = undefined;

/**
 * Allowed values for the <code>eventType</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.EventTypeEnum = {
  /**
   * value: "0fcb1955-0e80-4fd4-a78a-db47ee89700c"
   * @const
   */
  _0fcb19550e804fd4A78aDb47ee89700c: "0fcb1955-0e80-4fd4-a78a-db47ee89700c"
};
/**
 * Triggering event type. Defines the type of event that should trigger an alarm, when received from the source defined. Value map to display names:  0fcb1955-0e80-4fd4-a78a-db47ee89700c=External Event   
 * @member {module:model/AlarmDefinitions.EventTypeEnum} eventType
 */
AlarmDefinitions.prototype.eventType = undefined;

/**
 * @member {Array.<module:model/PathUserDefinedEvents>} sourceList
 */
AlarmDefinitions.prototype.sourceList = undefined;

/**
 * Allowed values for the <code>enableRule</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.EnableRuleEnum = {
  /**
   * value: "0"
   * @const
   */
  _0: "0",

  /**
   * value: "1"
   * @const
   */
  _1: "1",

  /**
   * value: "2"
   * @const
   */
  _2: "2"
};
/**
 * Enable rule. Defines when the alarm can be triggered. Options are: Always, by TimeProfile or by events.  When TimeProfile is defined the TimeProfile property must contain a valid TimeProfile path, when enabled by events then both EnablingEvents and DisablingEvents must be defined. Value map to display names:  0=Always   1=TimeProfile   2=EventTriggered   
 * @member {module:model/AlarmDefinitions.EnableRuleEnum} enableRule
 */
AlarmDefinitions.prototype.enableRule = undefined;

/**
 * @member {module:model/PathTimeProfiles} timeProfile
 */
AlarmDefinitions.prototype.timeProfile = undefined;

/**
 * @member {Array.<module:model/PathUserDefinedEvents>} enableEventList
 */
AlarmDefinitions.prototype.enableEventList = undefined;

/**
 * @member {Array.<module:model/PathUserDefinedEvents>} disableEventList
 */
AlarmDefinitions.prototype.disableEventList = undefined;

/**
 * Operator action time limit. If operator action is required within a specific time, the time is defined here.  Format is like: HH:mm.ss. Valid values are the same as defined in the Management Client, e.g. 1 minute, 5 minutes etc.  Default is 1 minute.
 * @member {String} managementTimeoutTime
 */
AlarmDefinitions.prototype.managementTimeoutTime = undefined;

/**
 * @member {Array.<module:model/PathUserDefinedEvents>} managementTimeoutEventList
 */
AlarmDefinitions.prototype.managementTimeoutEventList = undefined;

/**
 * @member {Array.<module:model/PathCameras>} relatedCameraList
 */
AlarmDefinitions.prototype.relatedCameraList = undefined;

/**
 * Allowed values for the <code>mapType</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.MapTypeEnum = {
  /**
   * value: "0"
   * @const
   */
  _0: "0",

  /**
   * value: "1"
   * @const
   */
  _1: "1",

  /**
   * value: "2"
   * @const
   */
  _2: "2"
};
/**
 * Alarm manager view. Value map to display names:  0=None   1=Map   2=Smart Map   
 * @member {module:model/AlarmDefinitions.MapTypeEnum} mapType
 */
AlarmDefinitions.prototype.mapType = undefined;

/**
 * Allowed values for the <code>relatedMap</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.RelatedMapEnum = {
  /**
   * value: "00000000-0000-0000-0000-000000000000"
   * @const
   */
  _00000000000000000000000000000000: "00000000-0000-0000-0000-000000000000"
};
/**
 * Related map. Defines what map to show in the alarm manager, when alarm is selected. Value map to display names:  00000000-0000-0000-0000-000000000000=   
 * @member {module:model/AlarmDefinitions.RelatedMapEnum} relatedMap
 */
AlarmDefinitions.prototype.relatedMap = undefined;

/**
 * Owner. Defines the initial owner. Should be formatted as Identity.ToString() does, like *John Doe (Acme/JD)*
 * @member {String} owner
 */
AlarmDefinitions.prototype.owner = undefined;

/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.PriorityEnum = {
  /**
   * value: "8188ff24-b5da-4c19-9ebf-c1d8fc2caa75"
   * @const
   */
  _8188ff24B5da4c199ebfC1d8fc2caa75: "8188ff24-b5da-4c19-9ebf-c1d8fc2caa75",

  /**
   * value: "9ad9338b-22ba-4f2e-bf62-e6948ae99bbf"
   * @const
   */
  _9ad9338b22ba4f2eBf62E6948ae99bbf: "9ad9338b-22ba-4f2e-bf62-e6948ae99bbf",

  /**
   * value: "34f1f987-6854-44fb-88a5-daa0add1e38a"
   * @const
   */
  _34f1f987685444fb88a5Daa0add1e38a: "34f1f987-6854-44fb-88a5-daa0add1e38a",

  /**
   * value: "583eabf3-b1c2-46a4-a26c-4f0ba9a8287d"
   * @const
   */
  _583eabf3B1c246a4A26c4f0ba9a8287d: "583eabf3-b1c2-46a4-a26c-4f0ba9a8287d"
};
/**
 * Priority. Sets the priority. Can be High, Medium, Low. Value map to display names:  8188ff24-b5da-4c19-9ebf-c1d8fc2caa75=High   9ad9338b-22ba-4f2e-bf62-e6948ae99bbf=Medium   34f1f987-6854-44fb-88a5-daa0add1e38a=Low   583eabf3-b1c2-46a4-a26c-4f0ba9a8287d=Custom   
 * @member {module:model/AlarmDefinitions.PriorityEnum} priority
 */
AlarmDefinitions.prototype.priority = undefined;

/**
 * Allowed values for the <code>category</code> property.
 * @enum {String}
 * @readonly
 */
AlarmDefinitions.CategoryEnum = {
  /**
   * value: "00000000-0000-0000-0000-000000000000"
   * @const
   */
  _00000000000000000000000000000000: "00000000-0000-0000-0000-000000000000",

  /**
   * value: "7558fed5-d92a-4b39-a98d-cec5158ae205"
   * @const
   */
  _7558fed5D92a4b39A98dCec5158ae205: "7558fed5-d92a-4b39-a98d-cec5158ae205"
};
/**
 * Alarm category. Sets the category of the alarm. Valid options are defined in the Management Client. Value map to display names:  00000000-0000-0000-0000-000000000000=   7558fed5-d92a-4b39-a98d-cec5158ae205=Test category   
 * @member {module:model/AlarmDefinitions.CategoryEnum} category
 */
AlarmDefinitions.prototype.category = undefined;

/**
 * @member {Array.<module:model/PathUserDefinedEvents>} triggerEventlist
 */
AlarmDefinitions.prototype.triggerEventlist = undefined;

/**
 * Auto-close alarm: . Defines if an alarm should be closed automatically upon reception of a specific message from save source.
 * @member {Boolean} autoClose
 */
AlarmDefinitions.prototype.autoClose = undefined;

/**
 * @member {module:model/AlarmDefinitionsRelations} relations
 */
AlarmDefinitions.prototype.relations = undefined;

