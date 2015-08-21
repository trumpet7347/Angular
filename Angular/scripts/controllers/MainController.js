angular.module("app").controller("MainController", function () {

    var base_sso_url = "https://login.eveonline.com/oauth/authorize/?";
    var response_type = "code";
    var redirect_uri = "http://localhost/angular/#/"
    var client_id = "3977760521344586a88dd8268fe0548d"
    var scope = "publicData"


    $scope.sso_login = base_sso_url +
        "response_type=" + response_type +
        "&redirect_uri=" + encodeURIComponent(redirect_uri) +
        "&client_id=" + client_id +
        "&scope=" + scope +
        "&state=test"

});