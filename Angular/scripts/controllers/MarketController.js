(function () {

    var app = angular.module("app");

    var MarketController = function ($scope) {

        $scope.message = "this is a test"
    }

    app.controller("MarketController", MarketController);
}());