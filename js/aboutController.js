(function(module) {                           //is this file suppose to hold the aboutController.js file//
  var aboutController = {};

  aboutController.index = function() {
    //$('#articles').hide();
    //$('#repo').hide();

    $('#about').show();
  };


  module.aboutController = aboutController;
})(window);
