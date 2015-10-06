nicksFlicks.directive('invertPage', function(){
    return function(scope, element){
        element.bind('click', function(){
            element.toggleClass('body');
        });
        // console.log('document.documentElement');
    }
});
