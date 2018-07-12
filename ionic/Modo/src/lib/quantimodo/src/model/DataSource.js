/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk's](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.112511
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Button', 'model/ConnectInstructions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Button'), require('./ConnectInstructions'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.DataSource = factory(root.Quantimodo.ApiClient, root.Quantimodo.Button, root.Quantimodo.ConnectInstructions);
  }
}(this, function(ApiClient, Button, ConnectInstructions) {
  'use strict';




  /**
   * The DataSource model module.
   * @module model/DataSource
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>DataSource</code>.
   * @alias module:model/DataSource
   * @class
   * @param affiliate {Boolean} Ex: true
   * @param connectorClientId {String} Ex: ba7d0c12432650e23b3ce924ae2d21e2ff59e7e4e28650759633700af7ed0a30
   * @param defaultVariableCategoryName {String} Ex: Foods
   * @param displayName {String} Ex: QuantiModo
   * @param enabled {Number} Ex: 0
   * @param getItUrl {String} Ex: https://quantimo.do
   * @param id {Number} Ex: 72
   * @param image {String} Ex: https://quantimodo.quantimo.do/ionic/Modo/www/img/logos/quantimodo-logo-qm-rainbow-200-200.png
   * @param imageHtml {String} Ex: <a href=\"https://quantimo.do\"><img id=\"quantimodo_image\" title=\"QuantiModo\" src=\"https://quantimodo.quantimo.do/ionic/Modo/www/img/logos/quantimodo-logo-qm-rainbow-200-200.png\" alt=\"QuantiModo\"></a>
   * @param linkedDisplayNameHtml {String} Ex: <a href=\"https://quantimo.do\">QuantiModo</a>
   * @param longDescription {String} Ex: QuantiModo is a Chrome extension, Android app, iOS app, and web app that allows you to easily track mood, symptoms, or any outcome you want to optimize in a fraction of a second.  You can also import your data from over 30 other apps and devices like Fitbit, Rescuetime, Jawbone Up, Withings, Facebook, Github, Google Calendar, Runkeeper, MoodPanda, Slice, Google Fit, and more.  QuantiModo then analyzes your data to identify which hidden factors are most likely to be influencing your mood or symptoms and their optimal daily values.
   * @param name {String} Ex: quantimodo
   * @param shortDescription {String} Ex: Tracks anything
   */
  var exports = function(affiliate, connectorClientId, defaultVariableCategoryName, displayName, enabled, getItUrl, id, image, imageHtml, linkedDisplayNameHtml, longDescription, name, shortDescription) {
    var _this = this;

    _this['affiliate'] = affiliate;










    _this['connectorClientId'] = connectorClientId;
    _this['defaultVariableCategoryName'] = defaultVariableCategoryName;
    _this['displayName'] = displayName;
    _this['enabled'] = enabled;
    _this['getItUrl'] = getItUrl;
    _this['id'] = id;
    _this['image'] = image;
    _this['imageHtml'] = imageHtml;


    _this['linkedDisplayNameHtml'] = linkedDisplayNameHtml;
    _this['longDescription'] = longDescription;


    _this['name'] = name;



    _this['shortDescription'] = shortDescription;






  };

  /**
   * Constructs a <code>DataSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSource} obj Optional instance to populate.
   * @return {module:model/DataSource} The populated <code>DataSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('affiliate')) {
        obj['affiliate'] = ApiClient.convertToType(data['affiliate'], 'Boolean');
      }
      if (data.hasOwnProperty('backgroundColor')) {
        obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
      }
      if (data.hasOwnProperty('buttons')) {
        obj['buttons'] = ApiClient.convertToType(data['buttons'], [Button]);
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('connected')) {
        obj['connected'] = ApiClient.convertToType(data['connected'], 'Boolean');
      }
      if (data.hasOwnProperty('connectError')) {
        obj['connectError'] = ApiClient.convertToType(data['connectError'], 'String');
      }
      if (data.hasOwnProperty('connectInstructions')) {
        obj['connectInstructions'] = ConnectInstructions.constructFromObject(data['connectInstructions']);
      }
      if (data.hasOwnProperty('connectorId')) {
        obj['connectorId'] = ApiClient.convertToType(data['connectorId'], 'Number');
      }
      if (data.hasOwnProperty('connectStatus')) {
        obj['connectStatus'] = ApiClient.convertToType(data['connectStatus'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('connectorClientId')) {
        obj['connectorClientId'] = ApiClient.convertToType(data['connectorClientId'], 'String');
      }
      if (data.hasOwnProperty('defaultVariableCategoryName')) {
        obj['defaultVariableCategoryName'] = ApiClient.convertToType(data['defaultVariableCategoryName'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Number');
      }
      if (data.hasOwnProperty('getItUrl')) {
        obj['getItUrl'] = ApiClient.convertToType(data['getItUrl'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('imageHtml')) {
        obj['imageHtml'] = ApiClient.convertToType(data['imageHtml'], 'String');
      }
      if (data.hasOwnProperty('lastSuccessfulUpdatedAt')) {
        obj['lastSuccessfulUpdatedAt'] = ApiClient.convertToType(data['lastSuccessfulUpdatedAt'], 'String');
      }
      if (data.hasOwnProperty('lastUpdate')) {
        obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Number');
      }
      if (data.hasOwnProperty('linkedDisplayNameHtml')) {
        obj['linkedDisplayNameHtml'] = ApiClient.convertToType(data['linkedDisplayNameHtml'], 'String');
      }
      if (data.hasOwnProperty('longDescription')) {
        obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('mobileConnectMethod')) {
        obj['mobileConnectMethod'] = ApiClient.convertToType(data['mobileConnectMethod'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('platforms')) {
        obj['platforms'] = ApiClient.convertToType(data['platforms'], ['String']);
      }
      if (data.hasOwnProperty('premium')) {
        obj['premium'] = ApiClient.convertToType(data['premium'], 'Boolean');
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
      }
      if (data.hasOwnProperty('shortDescription')) {
        obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
      }
      if (data.hasOwnProperty('spreadsheetUpload')) {
        obj['spreadsheetUpload'] = ApiClient.convertToType(data['spreadsheetUpload'], 'Boolean');
      }
      if (data.hasOwnProperty('totalMeasurementsInLastUpdate')) {
        obj['totalMeasurementsInLastUpdate'] = ApiClient.convertToType(data['totalMeasurementsInLastUpdate'], 'Number');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('updateRequestedAt')) {
        obj['updateRequestedAt'] = ApiClient.convertToType(data['updateRequestedAt'], 'String');
      }
      if (data.hasOwnProperty('updateStatus')) {
        obj['updateStatus'] = ApiClient.convertToType(data['updateStatus'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Ex: true
   * @member {Boolean} affiliate
   */
  exports.prototype['affiliate'] = undefined;
  /**
   * Background color HEX code that matches the icon
   * @member {String} backgroundColor
   */
  exports.prototype['backgroundColor'] = undefined;
  /**
   * @member {Array.<module:model/Button>} buttons
   */
  exports.prototype['buttons'] = undefined;
  /**
   * Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * True if the authenticated user has this connector enabled
   * @member {Boolean} connected
   */
  exports.prototype['connected'] = undefined;
  /**
   * Ex: Your token is expired. Please re-connect
   * @member {String} connectError
   */
  exports.prototype['connectError'] = undefined;
  /**
   * URL and parameters used when connecting to a service
   * @member {module:model/ConnectInstructions} connectInstructions
   */
  exports.prototype['connectInstructions'] = undefined;
  /**
   * Ex: 8
   * @member {Number} connectorId
   */
  exports.prototype['connectorId'] = undefined;
  /**
   * Ex: CONNECTED
   * @member {String} connectStatus
   */
  exports.prototype['connectStatus'] = undefined;
  /**
   * Number of measurements from this source or number of users who have measurements from this source
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Ex: 2000-01-01 00:00:00 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Ex: ba7d0c12432650e23b3ce924ae2d21e2ff59e7e4e28650759633700af7ed0a30
   * @member {String} connectorClientId
   */
  exports.prototype['connectorClientId'] = undefined;
  /**
   * Ex: Foods
   * @member {String} defaultVariableCategoryName
   */
  exports.prototype['defaultVariableCategoryName'] = undefined;
  /**
   * Ex: QuantiModo
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * Ex: 0
   * @member {Number} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Ex: https://quantimo.do
   * @member {String} getItUrl
   */
  exports.prototype['getItUrl'] = undefined;
  /**
   * Ex: 72
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Ex: https://quantimodo.quantimo.do/ionic/Modo/www/img/logos/quantimodo-logo-qm-rainbow-200-200.png
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Ex: <a href=\"https://quantimo.do\"><img id=\"quantimodo_image\" title=\"QuantiModo\" src=\"https://quantimodo.quantimo.do/ionic/Modo/www/img/logos/quantimodo-logo-qm-rainbow-200-200.png\" alt=\"QuantiModo\"></a>
   * @member {String} imageHtml
   */
  exports.prototype['imageHtml'] = undefined;
  /**
   * Ex: 2017-07-31 10:10:34 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} lastSuccessfulUpdatedAt
   */
  exports.prototype['lastSuccessfulUpdatedAt'] = undefined;
  /**
   * Epoch timestamp of last sync
   * @member {Number} lastUpdate
   */
  exports.prototype['lastUpdate'] = undefined;
  /**
   * Ex: <a href=\"https://quantimo.do\">QuantiModo</a>
   * @member {String} linkedDisplayNameHtml
   */
  exports.prototype['linkedDisplayNameHtml'] = undefined;
  /**
   * Ex: QuantiModo is a Chrome extension, Android app, iOS app, and web app that allows you to easily track mood, symptoms, or any outcome you want to optimize in a fraction of a second.  You can also import your data from over 30 other apps and devices like Fitbit, Rescuetime, Jawbone Up, Withings, Facebook, Github, Google Calendar, Runkeeper, MoodPanda, Slice, Google Fit, and more.  QuantiModo then analyzes your data to identify which hidden factors are most likely to be influencing your mood or symptoms and their optimal daily values.
   * @member {String} longDescription
   */
  exports.prototype['longDescription'] = undefined;
  /**
   * Ex: Got 412 new measurements on 2017-07-31 10:10:34
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Mobile connect method: webview, cordova, google, spreadsheet, or ip
   * @member {String} mobileConnectMethod
   */
  exports.prototype['mobileConnectMethod'] = undefined;
  /**
   * Ex: quantimodo
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Platforms (chrome, android, ios, web) that you can connect on.
   * @member {Array.<String>} platforms
   */
  exports.prototype['platforms'] = undefined;
  /**
   * True if connection requires upgrade
   * @member {Boolean} premium
   */
  exports.prototype['premium'] = undefined;
  /**
   * Required connector scopes
   * @member {Array.<String>} scopes
   */
  exports.prototype['scopes'] = undefined;
  /**
   * Ex: Tracks anything
   * @member {String} shortDescription
   */
  exports.prototype['shortDescription'] = undefined;
  /**
   * True if the user must upload a spreadsheet.  Post the uploaded spreadsheet with your clientId and user accessToken to https://app.quantimo.do/api/v2/spreadsheetUpload
   * @member {Boolean} spreadsheetUpload
   */
  exports.prototype['spreadsheetUpload'] = undefined;
  /**
   * Number of measurements obtained during latest update
   * @member {Number} totalMeasurementsInLastUpdate
   */
  exports.prototype['totalMeasurementsInLastUpdate'] = undefined;
  /**
   * Ex: 2017-07-31 10:10:34 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * Ex: 2017-07-18 05:16:31 UTC ISO 8601 YYYY-MM-DDThh:mm:ss
   * @member {String} updateRequestedAt
   */
  exports.prototype['updateRequestedAt'] = undefined;
  /**
   * Ex: UPDATED
   * @member {String} updateStatus
   */
  exports.prototype['updateStatus'] = undefined;
  /**
   * Ex: 230
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


