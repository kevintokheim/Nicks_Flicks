var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider){
    $stateProvider.state('home', {
        url: '',
        views: {
            'nicks-header': {
                templateUrl: 'partials/nicks-header.html',
            },
            'welcome': {
                templateUrl: 'partials/welcome.html',
            },
        }
    });

    $stateProvider.state('reviews', {
        url: 'reviews',
        views: {
            'nicks-header': {
                templateUrl: 'partials/nicks-header.html',
            },
            'list': {
                templateUrl: 'partials/list.html',
                controller: 'ReviewsCtrl'
            },
        }
    });
});
