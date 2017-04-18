'use strict';


// Defining ebrdApp module

var ebrdApp = angular.module('ebrdApp', []);

// Defining ebrdTabs controller on the ebrdApp module
ebrdApp.controller('tabsController', function TabsController($scope) {
	$scope.tabs = [
		{
			name: 'Projects',
			link: 'xyz'
		},
		{
			name: 'CRM',
			link: 'xyz'
		},
		{
			name: 'FRM',
			link: 'xyz'
		}
	];
});
