var app = angular.module("portfolioApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html"
    })
    .when("/about", {
        templateUrl: "partials/about.html"
    })
    .when("/skills", {
        templateUrl: "partials/skills.html"
    })
    .when("/projects", {
        templateUrl: "partials/projects.html"
    })
    .when("/contact", {
        templateUrl: "partials/contact.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});
app.controller("skillsController", function($scope) {
    $scope.skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "AngularJS",
        "Java"
    ];
});
app.controller("contactController", function($scope) {
    $scope.submitForm = function() {
        $scope.successMessage = "Thank you! Your message has been sent.";
    };
});