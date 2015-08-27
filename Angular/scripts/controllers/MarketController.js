angular.module("app").controller("MarketController", function ($scope, EveCrest) {

    displayItemIds = function (response) {
        var typeIds = response.data;
    };

    displayError = function () {

    };

    $scope.search = function () {
        EveCrest.getItemTypeIds($scope.crestToken).then(displayItemIds, displayError);
    };

});