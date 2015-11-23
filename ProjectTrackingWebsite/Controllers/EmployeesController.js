(function () {
    var EmployeesController = function ($scope, $http, $log) {
        var employees = function (serviceResp) {
            $scope.Employees = serviceResp.data;

        };
        $scope.SearchEmployee = function (EmployeeName) {
            $http.get("http://localhost:2464/api/ptemployees/" + EmployeeName)
            .then(employees, errorDetails);
            $log.info('Found Employee which contains - ' + EmployeeName);
        };
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };
        $http.get("http://localhost:2464/api/ptemployees")
            .then(employees, errorDetails);
        $scope.Title = "Employee Details Page";
        $scope.EmployeeName = null;
    };
    app.controller("EmployeesController", EmployeesController);
}());