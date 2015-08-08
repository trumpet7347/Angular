(function () {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.html",
                controller: "MainController"
            })
            .when("/market", {
                templateUrl: "views/market.html",
                controller: "MarketController"
            })
    });

}());

