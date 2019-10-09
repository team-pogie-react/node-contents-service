'use strict';


const Pimcore = require('../models/todoListModel');


exports.get_contents = async (req, res) => {

  const successCallback = function (data) {
    res.json(data);
  };

  const errorCallback = function () {
      console.log("error");
  };

  const inProgressCallback = function () {
      console.log("progress");
  };

  const options = {
    successCallback,
    errorCallback,
    inProgressCallback
  };


  Pimcore.get_contents(req.params, options);

}