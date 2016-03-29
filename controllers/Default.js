'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.routeTrainsTrain_codeGET = function routeTrainsTrainCodeGET (req, res, next) {
  Default.routeTrainsTrainCodeGET(req.swagger.params, res, next);
};
