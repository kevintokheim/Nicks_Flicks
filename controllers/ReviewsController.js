nicksFlicks.controller("ReviewsCtrl", function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory){
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;

    $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
    console.log($scope.review);
});
