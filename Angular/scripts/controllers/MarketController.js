angular.module("app").controller("MarketController", function ($scope, EveCrest) {

    displayItemIds = function (data) {
        items = data;
    };

    displayError = function () {

    };

    $scope.retriveMarketData = function () {
        
        //Get Items
        EveCrest.getMarketItemTypeIds()
        //Get buy orders for each item

        //add buy orders to item

        //Get sell orders for each item

        //add sell orders for each item
    };

});