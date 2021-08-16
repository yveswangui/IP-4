$(document).ready(function(){
    function pizzaOrder(size,toppings,crust){
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
    };
    pizzaOrder.prototype.pizzaPrice = function(){
        return this.sizePrice() + this.toppingPrice() + this.crustPrice()
    };




})