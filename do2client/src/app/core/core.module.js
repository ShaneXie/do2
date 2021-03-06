'use strict';

angular.module('do2.core', [])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	})
	// http://www.google.com/design/spec/style/color.html#color-color-palette
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
				.primaryPalette('red', {
					'default': '900',
					'hue-1': '500',
					'hue-2': 'A400',
					'hue-3': 'A700'})
				.accentPalette('yellow', {
					'default': 'A200',
					'hue-1': '300',
					'hue-2': '500',
					'hue-3': '800'})
				.warnPalette('lime', {
					'default': '400',
					'hue-1': '100',
					'hue-2': '600',
					'hue-3': 'A100'})
				.backgroundPalette('grey', {
					'default': '600',
					'hue-1': '500',
					'hue-2': '800',
					'hue-3': '900'
				});
	})
	.config(function ($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://staticlive.douyutv.com/**',
			'http://www.zhanqi.tv/**',
			'http://www.huomaotv.com/**',
			'http://yy.com/s/**',
			'http://www.twitch.tv/**'
		]);
	})
	.config(function(localStorageServiceProvider) {
		localStorageServiceProvider
		.setPrefix('do2')
		.setNotify(true, true);
	})
	.config(function($translateProvider) {
		$translateProvider.useSanitizeValueStrategy(null);
		$translateProvider.useStaticFilesLoader({
			prefix: 'i18n/',
			suffix: '.json'
		});
		$translateProvider.preferredLanguage('en');
});
