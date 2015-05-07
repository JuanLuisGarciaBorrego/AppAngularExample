app.controller("MainController",function($scope, $resource){

    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
    User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});

    $scope.posts= Post.query();
    $scope.users= User.query();

    //query() -> GET/posts = array de posts
    $scope.removePost = function(post){
        //Post.delete({id:post.id}); Nuestra API no nos permite eliminar.
        Post.delete({id:post.id}, function(data){
            console.log(data);
        });

        //eliminar 1 post de array posts
        $scope.posts = $scope.posts.filter(function(element){
            return element.id !== post.id;
        });
    }

});

app.controller("PostController",function($scope, $resource, $routeParams){

    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});

    $scope.post= Post.get({id: $routeParams.id});

});