app.controller("MainController",function($scope, $resource, PostResource, UserResource){

    User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});

    $scope.posts= PostResource.query();
    $scope.users= UserResource.query();

    //query() -> GET/posts = array de posts
    $scope.removePost = function(post){
        //Post.delete({id:post.id}); Nuestra API no nos permite eliminar.
        PostResource.delete({id:post.id}, function(data){
            console.log(data);
        });

        //eliminar 1 post de array posts
        $scope.posts = $scope.posts.filter(function(element){
            return element.id !== post.id;
        });
    }

});

app.controller("PostController",function($scope, $resource, $routeParams, PostResource){

    $scope.post= PostResource.get({id: $routeParams.id});

});

app.controller("NewPostController",function($scope, $resource, PostResource){

    $scope.post = {};
    $scope.savePost = function(){
        //Post.save({data: $scope.post});
        Post.save({data: $scope.post}, function(data){
            console.log(data);
        });

    }

});