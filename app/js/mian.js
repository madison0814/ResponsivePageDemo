var myApp = angular.module('mgApp', []);

myApp.controller('validationController', ['$scope', function ($scope) {
    $scope.address = "";
    $scope.distance = "";
    $scope.zipCode = "";
    $scope.isValid = true;
    $scope.invalidField = "";

    $scope.checkZip = function () {
        if (!$scope.address) {
            $scope.isValid = false;
            $scope.invalidField = "address";
            return;
        } else if (!$scope.distance) {
            $scope.isValid = false;
            $scope.invalidField = "distance";
            return;
        } else if ($scope.zipCode > 99999 || $scope.zipCode < 10000) {
            $scope.isValid = false;
            $scope.invalidField = "zip code";
            return;
        } else {
            $scope.isValid = true;
            $('#myModal').modal('show');
            return;
        };
    };
    $scope.preventInvalidInput = function (event) {
        var keycode = event.keyCode;
        if (keycode === 101 || keycode === 43 || keycode === 45 || keycode === 46) {
            event.preventDefault();
        }
    }

}]);
