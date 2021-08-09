//business logic







//user-interface logic

$(document).ready(function(){
    $('input[type = "radio"]#no-deliver').click(function(){
        $(".location").hide();
    });
    $('input[type = "radio"]#yes-deliver').click(function(){
        $(".location").show();
    });
});  
$("#checkout").click(function(){
    var size = $("#size option:selected").val();
    var toppings = $("#pizza-toppings option:selected").val();
    console.log(size + toppings);
    var total, myTotal;

    switch(size){
        case size = "Small":
            total = 500;
            if (toppings === "1"){
                myTotal = ((total) + 50) * (quantity)
            } else if( toppings === "2"){
                myTotal = ((total) + 45) * (quantity)
            }else if( toppings === "3"){
                myTotal = ((total) + 45) * (quantity)
            }else if( toppings === "4"){
                myTotal = ((total) + 40) * (quantity)
            }else if( toppings === "5"){
                myTotal = ((total) + 40) * (quantity)
            }else if( toppings === "6"){
                myTotal = ((total) + 45) * (quantity)
            }else if( toppings === "7"){
                myTotal = ((total) + 45) * (quantity)
            }else if( toppings === "8"){
                myTotal = ((total) + 35) * (quantity)
            }else if( toppings === "9"){
                myTotal = ((total) + 40) * (quantity)
            }else {
                myTotal = ((total) + 40) * (quantity)
            }
            break;
            case size = "Medium":
                total = 700;
                if (toppings === "1"){
                    myTotal = ((total) + 70) * (quantity)
                } else if( toppings === "2"){
                    myTotal = ((total) + 65) * (quantity)
                }else if( toppings === "3"){
                    myTotal = ((total) + 65) * (quantity)
                }else if( toppings === "4"){
                    myTotal = ((total) + 60) * (quantity)
                }else if( toppings === "5"){
                    myTotal = ((total) + 60) * (quantity)
                }else if( toppings === "6"){
                    myTotal = ((total) + 65) * (quantity)
                }else if( toppings === "7"){
                    myTotal = ((total) + 65) * (quantity)
                }else if( toppings === "8"){
                    myTotal = ((total) + 55) * (quantity)
                }else if( toppings === "9"){
                    myTotal = ((total) + 60) * (quantity)
                }else {
                    myTotal = ((total) + 60) * (quantity)
                }
                break;
                case size = "Large":
                    total = 400;
                    if (toppings === "1"){
                        myTotal = ((total) + 100) * (quantity)
                    } else if( toppings === "2"){
                        myTotal = ((total) + 95) * (quantity)
                    }else if( toppings === "3"){
                        myTotal = ((total) + 95) * (quantity)
                    }else if( toppings === "4"){
                        myTotal = ((total) + 90) * (quantity)
                    }else if( toppings === "5"){
                        myTotal = ((total) + 90) * (quantity)
                    }else if( toppings === "6"){
                        myTotal = ((total) + 95) * (quantity)
                    }else if( toppings === "7"){
                        myTotal = ((total) + 95) * (quantity)
                    }else if( toppings === "8"){
                        myTotal = ((total) + 85) * (quantity)
                    }else if( toppings === "9"){
                        myTotal = ((total) + 90) * (quantity)
                    }else {
                        myTotal = ((total) + 90) * (quantity)
                    }
                    break;
    }
    break;

});