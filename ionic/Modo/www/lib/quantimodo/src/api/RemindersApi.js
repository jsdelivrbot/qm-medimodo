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
    define(['ApiClient', 'model/CommonResponse', 'model/GetTrackingReminderNotificationsResponse', 'model/PostTrackingRemindersResponse', 'model/TrackingReminder', 'model/TrackingReminderDelete', 'model/TrackingReminderNotificationPost'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommonResponse'), require('../model/GetTrackingReminderNotificationsResponse'), require('../model/PostTrackingRemindersResponse'), require('../model/TrackingReminder'), require('../model/TrackingReminderDelete'), require('../model/TrackingReminderNotificationPost'));
  } else {
    // Browser globals (root is window)
    if (!root.Quantimodo) {
      root.Quantimodo = {};
    }
    root.Quantimodo.RemindersApi = factory(root.Quantimodo.ApiClient, root.Quantimodo.CommonResponse, root.Quantimodo.GetTrackingReminderNotificationsResponse, root.Quantimodo.PostTrackingRemindersResponse, root.Quantimodo.TrackingReminder, root.Quantimodo.TrackingReminderDelete, root.Quantimodo.TrackingReminderNotificationPost);
  }
}(this, function(ApiClient, CommonResponse, GetTrackingReminderNotificationsResponse, PostTrackingRemindersResponse, TrackingReminder, TrackingReminderDelete, TrackingReminderNotificationPost) {
  'use strict';

  /**
   * Reminders service.
   * @module api/RemindersApi
   * @version 5.8.112511
   */

  /**
   * Constructs a new RemindersApi. 
   * @alias module:api/RemindersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteTrackingReminder operation.
     * @callback module:api/RemindersApi~deleteTrackingReminderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Tracking Reminder
     * Stop getting notifications to record data for a variable.  Previously recorded measurements will be preserved.
     * @param {module:model/TrackingReminderDelete} body Id of reminder to be deleted
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User&#39;s id
     * @param {module:api/RemindersApi~deleteTrackingReminderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */
    this.deleteTrackingReminder = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteTrackingReminder");
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': opts['userId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token', 'quantimodo_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CommonResponse;

      return this.apiClient.callApi(
        '/v3/trackingReminders/delete', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrackingReminderNotifications operation.
     * @callback module:api/RemindersApi~getTrackingReminderNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTrackingReminderNotificationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get specific tracking reminder notifications
     * Specific tracking reminder notification instances that still need to be tracked.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order.
     * @param {Number} opts.userId User&#39;s id
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {module:model/String} opts.variableCategoryName Limit results to a specific variable category
     * @param {String} opts.reminderTime Ex: (lt)2017-07-31 21:43:26
     * @param {String} opts.clientId Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {Boolean} opts.onlyPast Ex: 1
     * @param {Boolean} opts.includeDeleted Include deleted variables
     * @param {module:model/String} opts.platform Ex: chrome, android, ios, web
     * @param {module:api/RemindersApi~getTrackingReminderNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTrackingReminderNotificationsResponse}
     */
    this.getTrackingReminderNotifications = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': opts['sort'],
        'userId': opts['userId'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'variableCategoryName': opts['variableCategoryName'],
        'reminderTime': opts['reminderTime'],
        'clientId': opts['clientId'],
        'onlyPast': opts['onlyPast'],
        'includeDeleted': opts['includeDeleted'],
        'platform': opts['platform'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token', 'quantimodo_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTrackingReminderNotificationsResponse;

      return this.apiClient.callApi(
        '/v3/trackingReminderNotifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTrackingReminders operation.
     * @callback module:api/RemindersApi~getTrackingRemindersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TrackingReminder>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get repeating tracking reminder settings
     * Users can be reminded to track certain variables at a specified frequency with a default value.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User&#39;s id
     * @param {module:model/String} opts.variableCategoryName Limit results to a specific variable category
     * @param {String} opts.createdAt When the record was first created. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {String} opts.updatedAt When the record was last updated. Use UTC ISO 8601 YYYY-MM-DDThh:mm:ss datetime format. Time zone should be UTC and not local.
     * @param {Number} opts.limit The LIMIT is used to limit the number of results returned. So if youhave 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records. (default to 100)
     * @param {Number} opts.offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause.If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
     * @param {String} opts.sort Sort by one of the listed field names. If the field name is prefixed with &#x60;-&#x60;, it will sort in descending order.
     * @param {String} opts.clientId Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {String} opts.appVersion Ex: 2.1.1.0
     * @param {module:model/String} opts.platform Ex: chrome, android, ios, web
     * @param {module:api/RemindersApi~getTrackingRemindersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TrackingReminder>}
     */
    this.getTrackingReminders = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'userId': opts['userId'],
        'variableCategoryName': opts['variableCategoryName'],
        'createdAt': opts['createdAt'],
        'updatedAt': opts['updatedAt'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sort': opts['sort'],
        'clientId': opts['clientId'],
        'appVersion': opts['appVersion'],
        'platform': opts['platform'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token', 'quantimodo_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [TrackingReminder];

      return this.apiClient.callApi(
        '/v3/trackingReminders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postTrackingReminderNotifications operation.
     * @callback module:api/RemindersApi~postTrackingReminderNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Snooze, skip, or track a tracking reminder notification
     * Snooze, skip, or track a tracking reminder notification
     * @param {Array.<module:model/TrackingReminderNotificationPost>} body Id of the tracking reminder notification to be snoozed
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId User&#39;s id
     * @param {String} opts.clientId Your QuantiModo client id can be obtained by creating an app at https://builder.quantimo.do
     * @param {module:model/String} opts.platform Ex: chrome, android, ios, web
     * @param {module:api/RemindersApi~postTrackingReminderNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommonResponse}
     */
    this.postTrackingReminderNotifications = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postTrackingReminderNotifications");
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': opts['userId'],
        'clientId': opts['clientId'],
        'platform': opts['platform'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token', 'quantimodo_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CommonResponse;

      return this.apiClient.callApi(
        '/v3/trackingReminderNotifications', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postTrackingReminders operation.
     * @callback module:api/RemindersApi~postTrackingRemindersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostTrackingRemindersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Store a Tracking Reminder
     * This is to enable users to create reminders to track a variable with a default value at a specified frequency
     * @param {Array.<module:model/TrackingReminder>} body TrackingReminder that should be stored
     * @param {module:api/RemindersApi~postTrackingRemindersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostTrackingRemindersResponse}
     */
    this.postTrackingReminders = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postTrackingReminders");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token', 'quantimodo_oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostTrackingRemindersResponse;

      return this.apiClient.callApi(
        '/v3/trackingReminders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
