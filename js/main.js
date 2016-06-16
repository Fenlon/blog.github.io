/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        .when("/home", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        //About
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        //Contact
        .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
        //project
        .when("/project", {templateUrl: "partials/project.html", controller: "PageCtrl"})
        //resume
        .when("/resume", {templateUrl: "partials/resume.html", controller: "PageCtrl"})
        .when("/resume2", {templateUrl: "resources/resume/Fenlon-Personal-Resume.pdf", controller: "PageCtrl"})
        //404
        .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
        // 重定向到404
        .otherwise({
            redirectTo: '/404'
        });

}]);



