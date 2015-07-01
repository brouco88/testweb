// El controlador permanece común a las tres vistas
// En principio esto facilita la programación
(function () {
    var vendingCtrl = function () {
        var vm = this;

        vm.titulo = "DTR Vending";

        
    }

    angular.module('controlVendingApp').controller('VendingCtrl', vendingCtrl);
}());