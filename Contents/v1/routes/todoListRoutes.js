'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController'),
    app_path = global.gConfig.app_path;

  // todoList Routes
  app.route(app_path + '/getContents/:source/:path')
    .get(todoList.get_contents);
};