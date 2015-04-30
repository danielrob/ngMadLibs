var ngMadLib = angular.module('ngMadLib', [])
	
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

	$scope.emptyWordsAndAskForInput = function(){
		for (var key in words) {
			if (words.hasOwnProperty(key)) {
				words[key] = null;
			}
		}
		$scope.tellStory = false
	};

});