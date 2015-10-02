var nicksFlicks = angular.module("nicksFlicks", ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: "",
        views: {
            'header': {
                templateUrl: "partials/header.html",
            },
            'welcome': {
                templateUrl: "partials/welcome.html",
            },
            'list': {
                templateUrl: "partials/list.html",
            },
        }
    });

    $stateProvider.state('reviews', {
        url: "/reviews",
        views: {
            'header': {
                templateUrl: "partials/header.html",
            },
            'list': {
                templateUrl: "partials/list.html",
                controller: "MoviesCtrl"
            }
        }
    });
});
