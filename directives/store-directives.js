/**
 * Created by Lucas on 27/06/2014.
 */
(function(){

    var app = angular.module('store-directives', []);

    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: "templates/product-description.html"
        };
    });

    app.directive('productSpecs', function(){
        return{
            restrict: 'E',
            templateUrl: "templates/product-specs.html"
        }
    });

    app.directive('productReviews',function(){
        return{
            restrict: 'E',
            templateUrl: "templates/product-reviews.html"
        }
    });

    app.directive('productTabs', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controllerAs: 'tabCtrl',
            controller: function(){
                this.currentTab = 1;
                this.setTab = function (newTab) {
                    this.currentTab = newTab;
                };
                this.isCurrentTab = function(tabNumber){
                    return this.currentTab === tabNumber;
                }
            }
        }
    });

    app.directive('productImages', function(){
        return{
            restrict: 'E',
            templateUrl: 'templates/product-images.html',
            controllerAs: 'imgCtrl',
            controller : function(){
                this.index = 0;
                this.setIndex = function(index) {
                    this.index = index;
                };
                this.isCurrentIndex = function(index){
                    return this.index === index;
                }
            }
        };
    });



})();