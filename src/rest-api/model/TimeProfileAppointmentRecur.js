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
 * The TimeProfileAppointmentRecur model module.
 * @module model/TimeProfileAppointmentRecur
 * @version 1.0.0
 */
export class TimeProfileAppointmentRecur {
  /**
   * Constructs a new <code>TimeProfileAppointmentRecur</code>.
   * @alias module:model/TimeProfileAppointmentRecur
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TimeProfileAppointmentRecur</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeProfileAppointmentRecur} obj Optional instance to populate.
   * @return {module:model/TimeProfileAppointmentRecur} The populated <code>TimeProfileAppointmentRecur</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TimeProfileAppointmentRecur();
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('appointmentRootId'))
        obj.appointmentRootId = ApiClient.convertToType(data['appointmentRootId'], 'String');
      if (data.hasOwnProperty('allDayEvent'))
        obj.allDayEvent = ApiClient.convertToType(data['allDayEvent'], 'Boolean');
      if (data.hasOwnProperty('startDateTime'))
        obj.startDateTime = ApiClient.convertToType(data['startDateTime'], 'String');
      if (data.hasOwnProperty('endDateTime'))
        obj.endDateTime = ApiClient.convertToType(data['endDateTime'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('recurrenceDescription'))
        obj.recurrenceDescription = ApiClient.convertToType(data['recurrenceDescription'], 'String');
      if (data.hasOwnProperty('recurrenceOccurrenceStartTime'))
        obj.recurrenceOccurrenceStartTime = ApiClient.convertToType(data['recurrenceOccurrenceStartTime'], 'String');
      if (data.hasOwnProperty('recurrenceOccurrenceDuration'))
        obj.recurrenceOccurrenceDuration = ApiClient.convertToType(data['recurrenceOccurrenceDuration'], 'String');
      if (data.hasOwnProperty('recurrencePatternType'))
        obj.recurrencePatternType = ApiClient.convertToType(data['recurrencePatternType'], 'String');
      if (data.hasOwnProperty('recurrencePatternFrequency'))
        obj.recurrencePatternFrequency = ApiClient.convertToType(data['recurrencePatternFrequency'], 'String');
      if (data.hasOwnProperty('recurrencePatternInterval'))
        obj.recurrencePatternInterval = ApiClient.convertToType(data['recurrencePatternInterval'], 'Number');
      if (data.hasOwnProperty('recurrencePatternDaysOfWeek'))
        obj.recurrencePatternDaysOfWeek = ApiClient.convertToType(data['recurrencePatternDaysOfWeek'], 'Number');
      if (data.hasOwnProperty('recurrencePatternDayOfMonth'))
        obj.recurrencePatternDayOfMonth = ApiClient.convertToType(data['recurrencePatternDayOfMonth'], 'Number');
      if (data.hasOwnProperty('recurrencePatternMonthOfYear'))
        obj.recurrencePatternMonthOfYear = ApiClient.convertToType(data['recurrencePatternMonthOfYear'], 'Number');
      if (data.hasOwnProperty('recurrencePatternOccurrenceOfDayInMonth'))
        obj.recurrencePatternOccurrenceOfDayInMonth = ApiClient.convertToType(data['recurrencePatternOccurrenceOfDayInMonth'], 'String');
      if (data.hasOwnProperty('recurrenceRangeStartDate'))
        obj.recurrenceRangeStartDate = ApiClient.convertToType(data['recurrenceRangeStartDate'], 'String');
      if (data.hasOwnProperty('recurrenceRangeEndDate'))
        obj.recurrenceRangeEndDate = ApiClient.convertToType(data['recurrenceRangeEndDate'], 'String');
      if (data.hasOwnProperty('recurrenceRangeLimit'))
        obj.recurrenceRangeLimit = ApiClient.convertToType(data['recurrenceRangeLimit'], 'String');
      if (data.hasOwnProperty('recurrenceRangeMaxOccurrences'))
        obj.recurrenceRangeMaxOccurrences = ApiClient.convertToType(data['recurrenceRangeMaxOccurrences'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
TimeProfileAppointmentRecur.prototype.displayName = undefined;

/**
 * ID of the recurrence
 * @member {String} appointmentRootId
 */
TimeProfileAppointmentRecur.prototype.appointmentRootId = undefined;

/**
 * All day event
 * @member {Boolean} allDayEvent
 */
TimeProfileAppointmentRecur.prototype.allDayEvent = undefined;

/**
 * Start time
 * @member {String} startDateTime
 */
TimeProfileAppointmentRecur.prototype.startDateTime = undefined;

/**
 * End time
 * @member {String} endDateTime
 */
TimeProfileAppointmentRecur.prototype.endDateTime = undefined;

/**
 * Subject
 * @member {String} subject
 */
TimeProfileAppointmentRecur.prototype.subject = undefined;

/**
 * Description
 * @member {String} recurrenceDescription
 */
TimeProfileAppointmentRecur.prototype.recurrenceDescription = undefined;

/**
 * Start time. The start time of each appointment, formatted as HH:mm:ss (seconds are ignored)
 * @member {String} recurrenceOccurrenceStartTime
 */
TimeProfileAppointmentRecur.prototype.recurrenceOccurrenceStartTime = undefined;

/**
 * Duration
 * @member {String} recurrenceOccurrenceDuration
 */
TimeProfileAppointmentRecur.prototype.recurrenceOccurrenceDuration = undefined;

/**
 * Allowed values for the <code>recurrencePatternType</code> property.
 * @enum {String}
 * @readonly
 */
TimeProfileAppointmentRecur.RecurrencePatternTypeEnum = {
  /**
   * value: "Explicit"
   * @const
   */
  explicit: "Explicit",

  /**
   * value: "Calculated"
   * @const
   */
  calculated: "Calculated"
};
/**
 * Define occurrences. Setting Define occurrences to Explicit will use the specific relevant values, for example Date in the month repeated each month - while setting Define occurrences to Calculated will calculate what the date should be, based on Days of the week as bitmask and Week number within the month, for example second Tuesday in each month. Value map to display names:  Explicit=Explicit   Calculated=Calculated   
 * @member {module:model/TimeProfileAppointmentRecur.RecurrencePatternTypeEnum} recurrencePatternType
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternType = undefined;

/**
 * Allowed values for the <code>recurrencePatternFrequency</code> property.
 * @enum {String}
 * @readonly
 */
TimeProfileAppointmentRecur.RecurrencePatternFrequencyEnum = {
  /**
   * value: "Daily"
   * @const
   */
  daily: "Daily",

  /**
   * value: "Weekly"
   * @const
   */
  weekly: "Weekly",

  /**
   * value: "Monthly"
   * @const
   */
  monthly: "Monthly",

  /**
   * value: "Yearly"
   * @const
   */
  yearly: "Yearly"
};
/**
 * Frequency. Value map to display names:  Daily=Daily   Weekly=Weekly   Monthly=Monthly   Yearly=Yearly   
 * @member {module:model/TimeProfileAppointmentRecur.RecurrencePatternFrequencyEnum} recurrencePatternFrequency
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternFrequency = undefined;

/**
 * Interval
 * @member {Number} recurrencePatternInterval
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternInterval = undefined;

/**
 * Days of the week as bitmask. Bitmask for what days to include. Bit 0 is Sunday, 1 is Monday etc. Value of 127 (hexadecimal 7f) indicates all days of the week.
 * @member {Number} recurrencePatternDaysOfWeek
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternDaysOfWeek = undefined;

/**
 * Date in the month. Used when frequency is Monthly or Yearly
 * @member {Number} recurrencePatternDayOfMonth
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternDayOfMonth = undefined;

/**
 * Month. Used when Frequency is Yearly
 * @member {Number} recurrencePatternMonthOfYear
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternMonthOfYear = undefined;

/**
 * Allowed values for the <code>recurrencePatternOccurrenceOfDayInMonth</code> property.
 * @enum {String}
 * @readonly
 */
TimeProfileAppointmentRecur.RecurrencePatternOccurrenceOfDayInMonthEnum = {
  /**
   * value: "None"
   * @const
   */
  none: "None",

  /**
   * value: "First"
   * @const
   */
  first: "First",

  /**
   * value: "Second"
   * @const
   */
  second: "Second",

  /**
   * value: "Third"
   * @const
   */
  third: "Third",

  /**
   * value: "Fourth"
   * @const
   */
  fourth: "Fourth",

  /**
   * value: "Last"
   * @const
   */
  last: "Last"
};
/**
 * Week number within the month. Defines the day of the week within the month for which the occurrence takes place. For example if bitmask defines 4 = Tuesdays, and this field is Second then the result is the second time it is a Tuesday in each month. Used when Frequency is Monthly or Yearly, and Define occurrences is Calculated.   Possible values: None First Second Third Fourth Last. Value map to display names:  None=None   First=First   Second=Second   Third=Third   Fourth=Fourth   Last=Last   
 * @member {module:model/TimeProfileAppointmentRecur.RecurrencePatternOccurrenceOfDayInMonthEnum} recurrencePatternOccurrenceOfDayInMonth
 */
TimeProfileAppointmentRecur.prototype.recurrencePatternOccurrenceOfDayInMonth = undefined;

/**
 * Start of occurrences
 * @member {String} recurrenceRangeStartDate
 */
TimeProfileAppointmentRecur.prototype.recurrenceRangeStartDate = undefined;

/**
 * End of occurrences
 * @member {String} recurrenceRangeEndDate
 */
TimeProfileAppointmentRecur.prototype.recurrenceRangeEndDate = undefined;

/**
 * Allowed values for the <code>recurrenceRangeLimit</code> property.
 * @enum {String}
 * @readonly
 */
TimeProfileAppointmentRecur.RecurrenceRangeLimitEnum = {
  /**
   * value: "NoLimit"
   * @const
   */
  noLimit: "NoLimit",

  /**
   * value: "LimitByNumberOfOccurrences"
   * @const
   */
  limitByNumberOfOccurrences: "LimitByNumberOfOccurrences",

  /**
   * value: "LimitByDate"
   * @const
   */
  limitByDate: "LimitByDate"
};
/**
 * End of occurrences is defined by:. Value map to display names:  NoLimit=NoLimit   LimitByNumberOfOccurrences=LimitByNumberOfOccurrences   LimitByDate=LimitByDate   
 * @member {module:model/TimeProfileAppointmentRecur.RecurrenceRangeLimitEnum} recurrenceRangeLimit
 */
TimeProfileAppointmentRecur.prototype.recurrenceRangeLimit = undefined;

/**
 * End of occurrences by count
 * @member {Number} recurrenceRangeMaxOccurrences
 */
TimeProfileAppointmentRecur.prototype.recurrenceRangeMaxOccurrences = undefined;

