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
   
}
Order.prototype.pizzaCost = function() {
    return (this.withToppingsCost() + this.withCrustCost()) * quantity
}

Order.prototype.withToppingsCost = function(){
    if(this.size ==="small"){
        if(this.toppings === "Bacon"){
            return 390;
        }else if(this.toppings === "BBQ Chicken"){
            return 405;
        }else if(this.toppings === "Beef with Green Pepper"){
            return 380;
        }else if(this.toppings === "Beef with Pepperoni"){
            return 380;
        }else if(this.toppings === "Black Olives with Pepperoni"){
            return 390;
        }else if(this.toppings === "Bufallo Chicken"){
            return 390;
        }else if(this.toppings === "Chicken with Pineapple"){
            return 395;
        }else if(this.toppings === "Extra Cheese"){
            return  385;
        }else if(this.toppings === "Mushroom"){
            return 385;
        }else{
            return 395;
        }
    }else if(this.size === "medium"){
        if(this.toppings === "Bacon"){
            return 540;
        }else if(this.toppings === "BBQ Chicken"){
            return 555;
        }else if(this.toppings === "Beef with Green Pepper"){
            return 530;
        }else if(this.toppings === "Beef with Pepperoni"){
           return 530;
        }else if(this.toppings === "Black Olives with Pepperoni"){
           return 540;
        }else if(this.toppings === "Bufallo Chicken"){
            return 540;
        }else if(this.toppings === "Chicken with Pineapple"){
            return 545;
        }else if(this.toppings === "Extra Cheese"){
            return 535;
        }else if(this.toppings === "Mushroom"){
            return 535;
        }else{
            return 545;
        }
    }else if(this.size === "large"){
        if(this.toppings === "Bacon"){
            return 740;
        }else if(this.toppings === "BBQ Chicken"){
            return 755;
        }else if(this.toppings === "Beef with Green Pepper"){
            return 730;
        }else if(this.toppings === "Beef with Pepperoni"){
           return 730;
        }else if(this.toppings === "Black Olives with Pepperoni"){
           return 740;
        }else if(this.toppings === "Bufallo Chicken"){
            return 740;
        }else if(this.toppings === "Chicken with Pineapple"){
            return 745;
        }else if(this.toppings === "Extra Cheese"){
            return 735;
        }else if(this.toppings === "Mushroom"){
            return 735;
        }else{
            return 745;
        }
    }
}
Order.prototype.withCrustCost = function() {
    if(this.size === "small"){
        if(this.crust === "Cheese Stuffed"){
            return 75;
        }else if (this.crust === "Classic"){
            return 80;
        }else if (this.crust === "Flat Bread"){
            return 65;
        }else if (this.crust === "Garlic and Parmesean Coated"){
            return 85;
        }else if (this.crust === "Gluten Free"){
            return 65;
        }else if (this.crust === "Pizza Bagels"){
            return 75;
        }else{
            return 70;
        }
    }else if(this.size === "medium"){
        if(this.crust === "Cheese Stuffed"){
            return 95;
        }else if (this.crust === "Classic"){
            return 100;
        }else if (this.crust === "Flat Bread"){
            return 85;
        }else if (this.crust === "Garlic and Parmesean Coated"){
            return 105;
        }else if (this.crust === "Gluten Free"){
            return 85;
        }else if (this.crust === "Pizza Bagels"){
            return 95;
        }else{
            return 90;
        }
    }else if(this.size === "large"){
        if(this.crust === "Cheese Stuffed"){
            return 115;
        }else if (this.crust === "Classic"){
            return 120;
        }else if (this.crust === "Flat Bread"){
            return 105;
        }else if (this.crust === "Garlic and Parmesean Coated"){
            return 125;
        }else if (this.crust === "Gluten Free"){
            return 105;
        }else if (this.crust === "Pizza Bagels"){
            return 115;
        }else{
            return 110;
        }
    }
}