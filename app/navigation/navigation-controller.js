

(function(){
    angular.module('mean-app')
    .controller('NavigationController', ['$scope', '$state', '$http', function($scope, $state, $http){
        
        $scope.loginin = function(){
                        console.log($scope.login);
            $http.post('api/user/login', $scope.login).success(function(response){
               localStorage.setItem('User-Data', JSON.stringify(response));
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());










