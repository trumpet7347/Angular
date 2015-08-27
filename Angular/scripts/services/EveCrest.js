angular.module("app").service("EveCrest", function ($http) {

    var returnResponseData = function (response) {
        return response.data;
    };

    var getMarketItemTypeIds = function () {
        return $http.get('https://public-crest.eveonline.com/market/types/')
                    .then(returnResponseData(response));
    };

    return {
        getMarketItemTypeIds: getMarketItemTypeIds
    };
});