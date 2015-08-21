(function () {

    var app = angular.module("app");

    var EveCrest = function ($http) {

        var getItemTypeIds = function(){

            return "This is from the EveCrest Service"
        };


        return {
            getItemTypeIds: getItemTypeIds
        };
    };

    app.service("EveCrest", EveCrest);
})();