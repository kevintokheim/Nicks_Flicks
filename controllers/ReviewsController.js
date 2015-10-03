nicksFlicks.controller("ReviewsCtrl", function MoviesCtrl($scope, ReviewsFactory){
    $scope.reviews = ReviewsFactory.movies;
    $scope.ReviewsFactory = ReviewsFactory;
    // $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
});
