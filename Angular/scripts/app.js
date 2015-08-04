function sso_login() {

    var base_sso_url = "https://login.eveonline.com/oauth/authorize/?";
    var response_type = "token";
    var redirect_uri = "http://google.com"
    var client_id = "96a55d0beb45456c852b8c645645fd48"
    var scope = "publicData"

    sso_url = base_sso_url +
        "respone_type=" + response_type +
        "&redirect_uri=" + encodeURIComponent(redirect_uri) +
        "&client_id=" + client_id +
        "&scope=" + scope +
        "&state=test";

    window.location = sso_url;

};

(function () {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.html",
                controller: "MainController"
            })
    });

}());

