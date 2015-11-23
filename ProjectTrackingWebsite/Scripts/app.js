var app = angular.module('ProjectTrackingModule', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/Home", {
            templateUrl: "/Home.html",
            controller: "HomeController"
        })
        .when("/Projects", {
            templateUrl: "ProjectManagement/ProjectDetails.html",
            controller: "ProjectsController"
        })
        .when("/UserStories", {
            templateUrl: "UserStories/UserStoryDetails.html",
            controller: "UserStoriesController"
        })
        .when("/Employees", {
            templateUrl: "Employees/EmployeeDetails.html",
            controller: "EmployeesController"
        })
        .when("/Tasks", {
            templateUrl: "Tasks/ProjectTaskDetails.html",
            controller: "ProjectTasksController"
        })
        .when("/Comments", {
            templateUrl: "ProjectManagement/ManagerCommentDetails.html",
            controller: "ManagerCommentsController"
        })
    .otherwise({ redirectTo: "Home" })
});