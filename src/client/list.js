var app = angular.module('RadioCRUD', []);

app.controller('listPageCtrl', ['$scope', function ($scope) {
    $scope.userName = 'John Johnson';

       $scope.changeUserName = function () {
           $scope.userName = 'Barak Husain Abama';
       };
}]);
