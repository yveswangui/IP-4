//business logic
function Customer(name) {
    this.customerName = name;
}






//user-interface logic
$(document).ready(function () {
    $('input[type = "radio"]#no-deliver').click(function () {
        $(".location").hide();
    });
    $('input[type = "radio"]#yes-deliver').click(function () {
        $(".location").show();
    });
})
$(document).ready(function () {
    $("form#order").submit(function (event) {
        event.preventDefault()
        var inputtedName = $("input#new-customer-name").val();
        var newCustomer = new Customer(inputtedName);
        console.log(newCustomer);
    });
});
$(document).ready(function () {
    $("#pizza-toppings").change(function() {
        console.log($(this).find(':selected').data('topping'));
    });
        $("#p-size").change(function(){
            console.log($(this).find(':selected').data('size'));
        });
            $("#pizza-crust").change(function(){
                console.log($(this).find(':selected').data('crust'));
            })
    });



//selection prices//
$(document).ready(function () {
    $(".pizza-size").change(function (event) {
    var total = 0;
        $(".pizza-size").each(function () {
            total += parseInt($(this).val())
            
            $(".pizza-toppings").change(function (event) {
            $(".pizza-toppings").each(function () {
                    var toppingsTotal = total + parseInt($(this).val())
                
                    $(".pizza-crust").change(function(event){
                    $(".pizza-crust").each(function(){
                        var crustTotal = toppingsTotal + parseInt($(this).val())
                
                        $(".form-quantity").change(function (event) {
                        $(".form-quantity").each(function () {
                                var orderTotal = crustTotal * parseInt($(this).val())

                            $(".towns").change(function (event) {
                                var finalCharges = orderTotal + parseInt($(this).val())
                                        //console.log(finalCharges)
                                        //alert("We got your order, your charges will be " + finalCharges)
                                $("#submit").click(function () {
                                    alert("We got your order, total cost will be " + "Ksh." + finalCharges + " . Your pizza will be delivered to you in 20 minutes.")

                                        });
                                    });
                                })
                            });
                        });
                    });
                });
            });
        });
    });
});
