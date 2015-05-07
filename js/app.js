var app = angular.module("MyApp",["ngRoute", "ngResource"]);

app.config(function($routeProvider){
   $routeProvider
       .when("/", {
           controller: "MainController",
           templateUrl: "templates/home.html"
       })
       .when("/post/:id",{
           controller: "PostController",
           templateUrl: "templates/post.html"
       })
});
