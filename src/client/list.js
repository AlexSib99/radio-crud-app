var app = angular.module('RadioCRUD', []);

app.controller('listPageCtrl', ['$scope', function ($scope) {
    $scope.userName = 'John Johnson';

       $scope.changeUserName = function () {
           $scope.userName = 'Barak Husain Abama';
       };
}]);

app.controller('secondCtrl', ['$scope', function ($scope) {
    $scope.numbers = [3, 5, 6, 8, 0];

    $scope.headers = ['name', 'address', 'phone', 'email'];

    $scope.data = [
       {
           name: 'John',
           address: 'Some street',
           phone: '111-222-333',
           email: 'john@xyz.com'
        },
        {
            name: 'Alex',
            address: 'Another street',
            phone: '999-999-999',
            email: 'mail@abc.net'
        },
        {
          name: 'Mary',
          address: 'Unknown',
          phone: '123-456-789',
          email: 'mary@abc.net'
        }
    ];
}]);
