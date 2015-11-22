(function () {
    var EmployeesController = function ($scope) {
        var employees = {
            employeeName: "John Richard",
            designation: "Project Manager",
            contactNo: "+333 3888389",
            eMailID: "john@projects.com",
            skillSets: "ASP.NET, ASP.NET MVC"
        };
        $scope.Title = "Employee Details Page";
        $scope.Employees = employees;
    };
    app.controller("EmployeesController", EmployeesController);
}());