'use strict';

exports.routeTrainsTrainCodeGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * route (String)
  * trainCode (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "code" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

