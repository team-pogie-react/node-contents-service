'use strict';

const http = require('http');


exports.get_contents = function (params, callback) {
  

  var options = {
    host: global.gConfig.pimcore_options.host,
    json: true,
    gzip: true,
    path: '/webservice/rest/document?apikey='+global.gConfig.pimcore_options.apikey+'&path=/'+params.path,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'connection': 'keep-alive',
      'transfer-encoding': 'chunked'
    }
  };


  http.get(options, function (res) {


    res.setEncoding('utf8');

    var data = '';
    res.on('data', (chunk) => {

      data += chunk;

      callback.inProgressCallback();
    });

    res.on('end', () => {

      var obj = JSON.parse(data);

      callback.successCallback(obj);

    });


  }).on('error', (err) => {


    return callback.errorCallback(err.message);


  });
    
}
