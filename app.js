	 angular.module('myApp', []);

   angular.module('myApp').controller('myCtrl', function($scope, magic) {
     $scope.changeNumber = function() {
       var rand_number = Math.floor(Math.random()*10);
       magic.set(rand_number);
     };
   });

   angular.module('myApp').controller('otherCntrl', function($scope, magic){
     $scope.showNumber = magic.get;

   });

   angular.module('myApp').service('magic', [function() {
     var magic_number = 10;
     return {
       get: function(){
         return magic_number;
       }
     };
   }]);
