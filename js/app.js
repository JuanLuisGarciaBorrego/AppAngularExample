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
       .when("/post-new",{
           controller: "NewPostController",
           templateUrl: "templates/newPost.html"
       })
       .when("/post-edit/:id",{
           controller: "PostController",
           templateUrl: "templates/updatePost.html"
       })
});
