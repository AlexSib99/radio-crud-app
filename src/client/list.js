var app = angular.module('RadioCRUD', []);

app.controller('listPageCtrl', ['$scope', function ($scope) {
    $scope.userName = 'John Johnson';

       $scope.changeUserName = function () {
           $scope.userName = 'Barak Husain Abama';
       };
}]);

app.controller('secondCtrl', ['$scope', function ($scope) {
    $scope.numbers = [3, 5, 6, 8, 0];

    $scope.headers = ['name', 'address', 'phone'];

    $scope.data = [
       {
           name: 'John',
           address: 'some street',
           phone: '111-222-333'
        },
        {
            name: 'Alex',
            address: 'another street',
            phone: '999-999-999'
        }
    ];
}]);
