angular.module("app").controller("MarketController", function ($scope, EveCrest) {

    $scope.search = function () {
        $scope.crestToken = EveCrest.getItemTypeIds();
        console.log("test")
    }

})