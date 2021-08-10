//business logic







//user-interface logic
$(document).ready(function(){
    $('input[type = "radio"]#no-deliver').click(function(){
        $(".location").hide();
    });
    $('input[type = "radio"]#yes-deliver').click(function(){
        $(".location").show();
    });
})
$ (document).ready(function(){
    $(".pizza-size").click(function(event){
        $(".pizza-toppings").click(function(event){
            $(".form-quantity").click(function(event){
            var total = 0;
            $(".pizza-size").each(function(){
                total += parseInt($(this).val())
            });
                $(".pizza-toppings").each(function(){
                    var toppingsTotal = total + parseInt($(this).val())
                
                
                    $(".form-quantity").each(function(){
                        var orderTotal = toppingsTotal * parseInt($(this).val())
                        console.log(orderTotal);
                    })
                })
                
            
                })
            });
        });
    });
