'use strict';

var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

module.exports.register = function register (req, res, next, body) {
  Device.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
