angular.module("app").service("EveCrest", function ($http) {

    var marketItems = [];

    var returnResponseData = function (response) {
        marketItems.push.apply(response.data.items);
        if (response.data.next) {
            getMarketItemTypeIds(response.data.next);
        }
    };

    var getMarketItemTypeIds = function (next) {

        if (next) {
            $http.get(next).then(returnResponseData);
        }
        else {
            $http.get('https://public-crest.eveonline.com/market/types/')
                 .then(returnResponseData);
        }

    };

    return {
        getMarketItemTypeIds: getMarketItemTypeIds
    };
});