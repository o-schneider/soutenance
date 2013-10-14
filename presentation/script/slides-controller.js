'use strict';

angular.module('soutenance').controller('SlidesController', function($scope){
	console.log("hi");
	$scope.slides = [1,2,3,4,5,6,7,8,9,10];
	console.log($scope.slides);
});