app.controller("MainController",function($scope, $resource){

    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
    User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});

    $scope.posts= Post.query();
    $scope.users= User.query();

    //query() -> GET/posts = array de posts

});

app.controller("PostController",function($scope, $resource, $routeParams){

    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});

    $scope.post= Post.get({id: $routeParams.id});

});