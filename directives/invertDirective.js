nicksFlicks.directive('invertPage', function(){
    return function(scope, element){
        element.bind('click', function(){
          element.parent().parent().toggleClass('night');
        });
        // console.log('document.documentElement');
    }
});
