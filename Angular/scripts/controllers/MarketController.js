angular.module("app").controller("MarketController", function ($scope, EveCrest) {

    $scope.search = function () {
        EveCrest.getItemTypeIds($scope.crestToken).then(displayItemIds, displayError);
    }

});