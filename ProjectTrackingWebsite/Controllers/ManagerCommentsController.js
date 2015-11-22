﻿(function () {
    var ManagerCommentsController = function ($scope, $http) {
        var managerComments = function (serviceResp) {
            $scope.Comments = serviceResp.data;
        };
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };
        $http.get("http://localhost:2464/api/ptmanagercomments/1")
            .then(managerComments, errorDetails);
        $scope.Title = "Manager Comments Page";
    };
    app.controller("ManagerCommentsController", ManagerCommentsController);
}());