//business logic
function Customer(name){
    this.customerName = name;
}






//user-interface logic
$(document).ready(function(){
    $('input[type = "radio"]#no-deliver').click(function(){
        $(".location").hide();
    });
    $('input[type = "radio"]#yes-deliver').click(function(){
        $(".location").show();
    });
})
$(document).ready(function(){
    $("form#order").submit(function(event){
        event.preventDefault()
        var inputtedName = $("input#new-customer-name").val();
        var newCustomer = new Customer(inputtedName);
        alert(newCustomer);
    });
});
$ (document).ready(function(){
    $(".pizza-size").click(function(event){
        $(".pizza-toppings").click(function(event){
            $(".form-quantity").click(function(event){
                $(".towns").click(function(event){
                    

                var total = 0;
                $(".pizza-size").each(function(){
                    total += parseInt($(this).val())
                });
                    $(".pizza-toppings").each(function(){
                        var toppingsTotal = total + parseInt($(this).val())
                    
                    
                        $(".form-quantity").each(function(){
                            var orderTotal = toppingsTotal * parseInt($(this).val())
                            

                            $(".towns").each(function(){
                                var finalCharges = orderTotal + parseInt($(this).val())
                                //console.log(finalCharges)
                                 //alert("We got your order, your charges will be " + finalCharges)
                                    $("#submit").click(function(){
                                        alert("We got your order, total cost will be " + "Ksh." + finalCharges +" . Your pizza will be delivered to you in 20 minutes.")

                                    })
                                 });
                                })
                            });
                        });
                    });
                });
            });
        });
