angular.module('exampleApp', [
    'ngRoute',
    'angularjs-dropdown-multiselect',
    'hljs',
	'ui.bootstrap'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);

    }
]);
