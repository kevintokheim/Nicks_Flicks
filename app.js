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
            // 'list': {
            //     templateUrl: "partials/list.html",
            // },
        }
    });

    $stateProvider.state('movies', {
        url: "/movies",
        views: {
            'header': {
                templateUrl: "partials/header.html",
            },
            'list': {
                templateUrl: "partials/list.html",
                controller: "MoviesCtrl"
            },
                    // 'reviews': {
                    //     templateUrl: "partials/reviews.html",
                    //     controller: "ReviewsCtrl"
                    // }
        }
    });
});
