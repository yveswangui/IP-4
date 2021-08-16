$(document).ready(function(){
    function pizzaOrder(size,toppings,crust){
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
    };
    pizzaOrder.prototype.pizzaPrice = function(){
        return this.sizePrice() + this.toppingPrice() + this.crustPrice()
    };

    // pizza sizes prices
    pizzaOrder.prototype.sizePrice = function(){
        if (this.size === "small"){
            return 300;  
        } else if (this.size === "medium"){
            return 450;
        }else{
            return 650;
        }
    }
    // pizza crust prices
    pizzaOrder.prototype.crustPrice = function(){
        if(this.crust ==="Cheese Stuffed"){
            return 75;
        }else if(this.crust === "Classic"){
            return 80;
        }else if(this.crust === "Flat Bread"){
            return 65;
        }else if(this.crust === "Garlic and Parmesean Coated"){
            return 85;
        }else if(this.crust === "Gluten Free"){
            return 65;
        }else if(this.crust === "Pizza Bagels"){
            return 75;
        }else{
            return 70;
        }
    }
    //pizza toppings prices

    pizzaOrder.prototype.toppingPrice = function(){
        if (this.size === "small"){
            if(this.toppings === "Bacon"){
                return 90;
            }else if (this.toppings ==="BBQ Chicken"){
                return 105;
            }else if (this.toppings === "Beef with Green Pepper"){
                return 80;
            }else if(this.toppings === "Beef with Pepperoni"){
                return 80;
            }else if(this.toppings === "Black Olives with Pepperoni"){
                return 90;
            }else if(this.toppings === "Bufallo Chicken"){
                return 90;
            }else if(this.toppings === "Chicken with Pineapple"){
                return 95;
            }else if(this.toppings === "Extra Cheese"){
                return 85;
            }else if(this.toppings === "Mushroom"){
                return 85;
            }else {
                return 95;
            }
        }else if (this.size === "medium"){
            if(this.toppings === "Bacon"){
                return 110;
            }else if (this.toppings ==="BBQ Chicken"){
                return 125;
            }else if (this.toppings === "Beef with Green Pepper"){
                return 100;
            }else if(this.toppings === "Beef with Pepperoni"){
                return 100;
            }else if(this.toppings === "Black Olives with Pepperoni"){
                return 110;
            }else if(this.toppings === "Bufallo Chicken"){
                return 110;
            }else if(this.toppings === "Chicken with Pineapple"){
                return 115;
            }else if(this.toppings === "Extra Cheese"){
                return 105;
            }else if(this.toppings === "Mushroom"){
                return 105;
            }else {
                return 115;
            }
        }if (this.size === "small"){
            if(this.toppings === "Bacon"){
                return 130;
            }else if (this.toppings ==="BBQ Chicken"){
                return 135;
            }else if (this.toppings === "Beef with Green Pepper"){
                return 120;
            }else if(this.toppings === "Beef with Pepperoni"){
                return 120;
            }else if(this.toppings === "Black Olives with Pepperoni"){
                return 130;
            }else if(this.toppings === "Bufallo Chicken"){
                return 130;
            }else if(this.toppings === "Chicken with Pineapple"){
                return 135;
            }else if(this.toppings === "Extra Cheese"){
                return 125;
            }else if(this.toppings === "Mushroom"){
                return 125;
            }else {
                return 135;
            }
        }
    }



})