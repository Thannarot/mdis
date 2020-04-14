(function () {

	'use strict';
	angular.module('rheas')
	.controller('settingsCtrl', function ($http, $translate, $scope, settings) {

		$scope.changeLanguage = function (langKey) {
			$translate.use(langKey);
		};

		$scope.menus = settings.menus;
		$scope.footerLinks = settings.footerLinks;
		$scope.partnersHeader = settings.partnersHeader;
		$scope.partnersFooter = settings.partnersFooter;

		$scope.trimDescription = function (description) {
			return String(description).substring(0, 500);
		};

	});

})();
