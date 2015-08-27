(function () {

    var app = angular.module("app");

    var EveCrest = function ($http) {

        var getItemTypeIds = function(){
            return $http.get('https://public-crest.eveonline.com/market/types/');
        };


        return {
            getItemTypeIds: getItemTypeIds
        };
    };

    app.service("EveCrest", EveCrest);
})();