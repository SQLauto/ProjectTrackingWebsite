(function () {
    var projectTasksService = function ($http) {
        var projectTasks = function () {
            return $http.get("http://localhost:2464/api/ptprojecttasks")
                        .then(function (serviceResp) {
                            return serviceResp.data;
                        });
        };
        return {
            projectTasks: projectTasks
        };
    };
    var module = angular.module("ProjectTrackingModule");
    module.factory("projectTasksService", ["$http", projectTasksService]);

}());