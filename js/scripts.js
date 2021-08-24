$(document).ready(function(){
    $('input[type = "radio"]#no-deliver').click(function(){
        $(".location").hide();
    });
    $('input[type = "radio"]#yes-deliver').click(function(){
        $(".location").show();
    });
});



//pizza order 
var finalPriceArray = [];
function Order (size, toppings, crust, quantity, delivery){
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.quantity = quantity;
    this.delivery = delivery;
    this.pizzaPrice = 0;
}

Order.prototype.singlePizzaCost = function(){
    if(this.size ==="small"){
        this.pizzaPrice += 300;
    }
    if(this.size === "medium"){
        this.pizzaPrice += 450;
    }
    else if(this.size === "large"){
        this.pizzaPrice += 650;
    }
}