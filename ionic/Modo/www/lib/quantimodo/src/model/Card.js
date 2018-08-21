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
    define(['ApiClient', 'model/Button', 'model/InputField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Button'), require('./InputField'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.Card = factory(root.Quantimodo.ApiClient, root.Quantimodo.Button, root.Quantimodo.InputField);
  }
}(this, function(ApiClient, Button, InputField) {
  'use strict';




  /**
   * The Card model module.
   * @module model/Card
   * @version 5.8.112511
   */

  /**
   * Constructs a new <code>Card</code>.
   * @alias module:model/Card
   * @class
   * @param id {String} HTML element id
   */
  var exports = function(id) {
    var _this = this;










    _this['id'] = id;












  };

  /**
   * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Card} obj Optional instance to populate.
   * @return {module:model/Card} The populated <code>Card</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionSheetButtons')) {
        obj['actionSheetButtons'] = ApiClient.convertToType(data['actionSheetButtons'], [Button]);
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('avatarCircular')) {
        obj['avatarCircular'] = ApiClient.convertToType(data['avatarCircular'], 'String');
      }
      if (data.hasOwnProperty('backgroundColor')) {
        obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
      }
      if (data.hasOwnProperty('buttons')) {
        obj['buttons'] = ApiClient.convertToType(data['buttons'], [Button]);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('headerTitle')) {
        obj['headerTitle'] = ApiClient.convertToType(data['headerTitle'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
      if (data.hasOwnProperty('htmlContent')) {
        obj['htmlContent'] = ApiClient.convertToType(data['htmlContent'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('inputFields')) {
        obj['inputFields'] = ApiClient.convertToType(data['inputFields'], [InputField]);
      }
      if (data.hasOwnProperty('ionIcon')) {
        obj['ionIcon'] = ApiClient.convertToType(data['ionIcon'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
      }
      if (data.hasOwnProperty('selectedButton')) {
        obj['selectedButton'] = Button.constructFromObject(data['selectedButton']);
      }
      if (data.hasOwnProperty('sharingBody')) {
        obj['sharingBody'] = ApiClient.convertToType(data['sharingBody'], 'String');
      }
      if (data.hasOwnProperty('sharingButtons')) {
        obj['sharingButtons'] = ApiClient.convertToType(data['sharingButtons'], [Button]);
      }
      if (data.hasOwnProperty('sharingTitle')) {
        obj['sharingTitle'] = ApiClient.convertToType(data['sharingTitle'], 'String');
      }
      if (data.hasOwnProperty('subHeader')) {
        obj['subHeader'] = ApiClient.convertToType(data['subHeader'], 'String');
      }
      if (data.hasOwnProperty('subTitle')) {
        obj['subTitle'] = ApiClient.convertToType(data['subTitle'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Button>} actionSheetButtons
   */
  exports.prototype['actionSheetButtons'] = undefined;
  /**
   * Smaller square image
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * Smaller circular image
   * @member {String} avatarCircular
   */
  exports.prototype['avatarCircular'] = undefined;
  /**
   * Ex: #f2f2f2
   * @member {String} backgroundColor
   */
  exports.prototype['backgroundColor'] = undefined;
  /**
   * @member {Array.<module:model/Button>} buttons
   */
  exports.prototype['buttons'] = undefined;
  /**
   * Ex: Content
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Ex: Title
   * @member {String} headerTitle
   */
  exports.prototype['headerTitle'] = undefined;
  /**
   * HTML for the entire card.
   * @member {String} html
   */
  exports.prototype['html'] = undefined;
  /**
   * Ex: <div>Content</div>
   * @member {String} htmlContent
   */
  exports.prototype['htmlContent'] = undefined;
  /**
   * HTML element id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Larger image of variable dimensions
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {Array.<module:model/InputField>} inputFields
   */
  exports.prototype['inputFields'] = undefined;
  /**
   * Ex: ion-refresh
   * @member {String} ionIcon
   */
  exports.prototype['ionIcon'] = undefined;
  /**
   * A link to a web page or something. Not much more to say about that.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * Key value pairs derived from user input fields, button clicks, or preset defaults
   * @member {Object} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * Button that the user clicked and the provided function parameters
   * @member {module:model/Button} selectedButton
   */
  exports.prototype['selectedButton'] = undefined;
  /**
   * Ex: sharingBody
   * @member {String} sharingBody
   */
  exports.prototype['sharingBody'] = undefined;
  /**
   * @member {Array.<module:model/Button>} sharingButtons
   */
  exports.prototype['sharingButtons'] = undefined;
  /**
   * Ex: sharingTitle
   * @member {String} sharingTitle
   */
  exports.prototype['sharingTitle'] = undefined;
  /**
   * Ex: subTitle
   * @member {String} subHeader
   */
  exports.prototype['subHeader'] = undefined;
  /**
   * Ex: subTitle
   * @member {String} subTitle
   */
  exports.prototype['subTitle'] = undefined;
  /**
   * Ex: Title
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


