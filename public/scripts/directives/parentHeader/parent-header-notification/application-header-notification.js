'use strict';

/**
*header notification 
 */
angular.module('starsApp')
	.directive('parentHeaderNotification',function(){
		return {
        templateUrl:'scripts/directives/parentHeader/parent-header-notification/parent-header-notification.html',
        restrict: 'E',
        replace: true,
	}
	});


