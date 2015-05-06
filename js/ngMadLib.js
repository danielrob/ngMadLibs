var ngMadLib = angular.module('ngMadLib', ['ngAnimate'])
  
ngMadLib.controller('madLibsController', function($scope) {
  var words = {
               'name':'',
               'dirty':'',
               'obnoxious':'',
               'job':'',
               'celeb':'',
               'huge':'',
               'task':'',
               'skill':'',
               'adjective':'',
              };

  $scope.words = words;
  $scope.tellStory = false;

  $scope.submitWords = function(){
    if (isEmpty($scope.wordInput.$error)){
      $scope.tellStory = true;
    };
  };


  $scope.reset = function(){ emptyWords(); askForInput(); };


  function emptyWords(){
    for (var key in words) {
      if (words.hasOwnProperty(key)) {
        words[key] = null;
      }
    }
  };

  function askForInput(){
    $scope.tellStory = false
    $scope.wordInput.$setPristine();
    $scope.wordInput.$setUntouched();
  };

  function isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return true;
    }

});