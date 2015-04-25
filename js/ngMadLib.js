var ngMadLib = angular.module('ngMadLib', [])
	
ngMadLib.controller('madLibsController', function($scope) {
	var orderedWords = ['name','dirty','obnoxious','job','celeb','huge','task','skill','adjective']; 
	var words = {
							 'name':{'value':'', 'holder':'female name','size':11},
							 'dirty':{'value':'', 'holder':'Dirty task', 'size':8},
							 'obnoxious':{'value':'', 'holder':'Obnoxious celebrity', 'size':17},
							 'job':{'value':'', 'holder':'Job title', 'size': 7},
							 'celeb':{'value':'', 'holder':'Celebrity', 'size': 8},
							 'huge':{'value':'', 'holder':'Huge number', 'size': 11},
							 'task':{'value':'', 'holder':'Tedious task', 'size': 12},
							 'skill':{'value':'', 'holder':'Useless skill', 'size': 11},
							 'adjective':{'value':'', 'holder':'Adjective', 'size': 8}
							};
	$scope.orderedWords = orderedWords;
	$scope.words = words;
});