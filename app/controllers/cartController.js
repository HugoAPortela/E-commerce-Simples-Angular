cartShopping.controller('cartController', ['$scope', '$http', function($scope, $http){
	$scope.products = [
		{
	        "name": "Smartphone Moto G4 Plus Colors Preto Ed. Especial 5.5\", Androidâ„¢ 6.0 Lollipop, Cam 16Mp, 32Gb",
	        "price": 1399.00,
	        "quantity": 1,
	        "image": null
	    },
	    {
	        "name": "iPhone 7 Plus 256Gb Preto Matte",
	        "price": 4899.00,
	        "quantity": 2,
	        "image": "http://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430090682"
	    },
	    {
	        "name": "Smartphone Samsung Galaxy S7 Edge Preto Tela 5.5\" Android 6.0 CÃ¢mera 12Mp 32Gb",
	        "price":  3499.00,
	        "quantity": 5,
	        "image": "http://c.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s7-32gb-preto-4gcam-12mp-selfie-5mp-tela-5.1-34-quad-hd-octa-core-215915300.jpg"
	    },
	    {
	        "name": "Smartphone LG X Power Dourado Tela 5,3\" Androidâ„¢ 6.0 CÃ¢mera 13Mp Dualchip 16Gb",
	        "price":  799.00,
	        "quantity": 2,
	        "image": "https://images-americanas.b2w.io/produtos/01/00/item/128722/0/128722002SZ.jpg"
	    },
	    {
	        "name": "Smart TV LED 32\" Samsung UN32J4300AG HD com Conversor Digital 2 HDMI 1 USB Wi-Fi 120Hz",
	        "price":  1289.99,
	        "quantity": 1,
	        "image": null
	    },
	    {
	        "name": "BONECO PEPPA PIG",
	        "price":  58.85,
	        "quantity": 1,
	        "image": "https://images-americanas.b2w.io/produtos/01/00/sku/8001/6/8001635_1GG.jpg"
	    }
	];

	/*var apiIntercase = function(){
		$http.get('http://api.intercase.net.br/items.json');
	};*/

	$scope.remove = function(index){
		$scope.products.splice(index, 1);
	};

	$scope.add = function(product){
		$scope.products.push(product);
	};	
}]);

