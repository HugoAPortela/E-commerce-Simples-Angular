cartShopping.controller('apiController', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://api.intercase.net.br/items.json').success(function(items){
        console.log(items);
    });
}]);