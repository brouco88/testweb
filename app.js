// Declaración de un nuevo módulo sin dependencias, llamado 'controlCalculadoraProductosApp'
angular.module('controlVendingApp', ['ngRoute']);


function configurarRutas($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'VendingCtrl',
                controllerAs: 'vending',
                templateUrl: 'inicio.html'
            })
            .when('/contacto', {
                controller: 'VendingCtrl',
                controllerAs: 'vending',
                templateUrl: 'contacto.html'
            })
            .when('/productos', {
                controller: 'VendingCtrl',
                controllerAs: 'vending',
                templateUrl: 'productos.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    
}

// Se registra la función como un configurador del módulo
angular.module('controlVendingApp').config(configurarRutas);

var app = angular.module('AngularGoogleMap', ['google-maps']);
app.controller('MapCtrl', ['$scope', function ($scope) {
 
	$scope.map = {
		center: {
			latitude: 40.454018, 
			longitude: -3.509205
		}, 
		zoom: 12,
		options : {
			scrollwheel: false
		},
		control: {}
	};
	$scope.marker = {
		id: 0,
		coords: {
			latitude: 40.454018,
			longitude: -3.509205
		},
		options: {
			draggable: true
		}
	};
}]);