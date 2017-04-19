


(function(){
    angular.module('mean-app')
.controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope=createnewuser=function(){
        	console.log($scope.newUser);
        	 $http.post('api/user/signup', $scope.newUser).success(function(response){
            
            }).error(function(error){
                console.log(error);
            })
        }
        
    }]);
}());