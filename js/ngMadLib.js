var ngMadLib = angular.module('ngMadLib', [])
	
ngMadLib.controller('madLibsController', function($scope) {
	var orderedWords = ['name','dirty','obnoxious','job','celeb','huge','task','skill','adjective']; 
	var words = {
							 'name':{'value':'', 'holder':'female name','size':11, 'type': 'text'},
							 'dirty':{'value':'', 'holder':'Dirty task', 'size':8, 'type': 'text'},
							 'obnoxious':{'value':'', 'holder':'Obnoxious celebrity', 'size':17, 'type': 'text'},
							 'job':{'value':'', 'holder':'Job title', 'size': 7, 'type': 'text'},
							 'celeb':{'value':'', 'holder':'Celebrity', 'size': 8, 'type': 'text'},
							 'huge':{'value':'', 'holder':'Huge number', 'size': 7, 'type': 'number'},
							 'task':{'value':'', 'holder':'Tedious task', 'size': 12, 'type': 'text'},
							 'skill':{'value':'', 'holder':'Useless skill', 'size': 11, 'type': 'text'},
							 'adjective':{'value':'', 'holder':'Adjective', 'size': 8}
							};

	$scope.orderedWords = orderedWords;
	$scope.words = words;
	$scope.tellStory = false;

	$scope.emptyWordsAndAskForInput = function(){
		for (var key in words) {
			if (words.hasOwnProperty(key)) {
				words[key].value = null;
			}
		}
		$scope.tellStory = false
	};

});