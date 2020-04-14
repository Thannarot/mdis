(function () {
	'use strict';

	angular
		.module('rheas')
		.config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'modules/map/client/views/map.client.view.html'
			});
	}
})();
