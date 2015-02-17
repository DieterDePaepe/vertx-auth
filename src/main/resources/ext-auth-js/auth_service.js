/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module ext-auth-js/auth_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JAuthService = io.vertx.ext.auth.AuthService;

/**

 @class
*/
var AuthService = function(j_val) {

  var j_authService = j_val;
  var that = this;

  /**

   @public
   @param credentials {Object} 
   @param resultHandler {function} 
   */
  this.login = function(credentials, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && typeof __args[1] === 'function') {
      j_authService.login(utils.convParamJsonObject(credentials), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param credentials {Object} 
   @param timeout {number} 
   @param resultHandler {function} 
   */
  this.loginWithTimeout = function(credentials, timeout, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'object' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_authService.loginWithTimeout(utils.convParamJsonObject(credentials), timeout, function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param loginID {string} 
   @param resultHandler {function} 
   */
  this.logout = function(loginID, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_authService.logout(loginID, function(ar) {
      if (ar.succeeded()) {
        resultHandler(null, null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param loginID {string} 
   @param resultHandler {function} 
   */
  this.refreshLoginSession = function(loginID, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_authService.refreshLoginSession(loginID, function(ar) {
      if (ar.succeeded()) {
        resultHandler(null, null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param loginID {string} 
   @param role {string} 
   @param resultHandler {function} 
   */
  this.hasRole = function(loginID, role, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_authService.hasRole(loginID, role, function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param loginID {string} 
   @param roles {Array.<string>} 
   @param resultHandler {function} 
   */
  this.hasRoles = function(loginID, roles, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      j_authService.hasRoles(loginID, utils.convParamSetBasicOther(roles), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param loginID {string} 
   @param permission {string} 
   @param resultHandler {function} 
   */
  this.hasPermission = function(loginID, permission, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_authService.hasPermission(loginID, permission, function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public
   @param loginID {string} 
   @param permissions {Array.<string>} 
   @param resultHandler {function} 
   */
  this.hasPermissions = function(loginID, permissions, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'function') {
      j_authService.hasPermissions(loginID, utils.convParamSetBasicOther(permissions), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public

   */
  this.start = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_authService.start();
    } else utils.invalidArgs();
  };

  /**

   @public

   */
  this.stop = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_authService.stop();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_authService;
};

/**

 @memberof module:ext-auth-js/auth_service
 @param vertx {Vertx} 
 @param address {string} 
 @return {AuthService}
 */
AuthService.createEventBusProxy = function(vertx, address) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string') {
    return new AuthService(JAuthService.createEventBusProxy(vertx._jdel, address));
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = AuthService;