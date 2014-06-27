/**
 * Created by Lucas on 25/06/2014.
 */

(function(){
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        this.products = [];
        this.currentProduct = 0;

        $http.get('data/products.json').success(function(data){
           store.products = data;
        });

        // Just for change the between products.
        this.nextProduct = function(){
            this.currentProduct += 1;
            if (this.currentProduct == 3 )
                this.currentProduct  = 0;

            console.log(this.currentProduct);
        }
        this.previousProduct = function(){
            this.currentProduct -= 1;
            if (this.currentProduct == -1)
                this.currentProduct = 2;

            console.log(this.currentProduct);
        }
    }]);

    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();