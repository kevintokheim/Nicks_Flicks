nicksFlicks.directive('changeClass', function(){
    return function(scope, element){
        element.bind('click', function(){
            element.toggleClass('bg-primary');
        });
    }
});
