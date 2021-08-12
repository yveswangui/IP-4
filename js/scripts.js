//business logic
function Customer(cName) {
    this.customerName = cName;
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
    $("#check-order").click(function(){
    $("#p-size").change(function () {
     $(this).find(':selected').data('size');
    });

    $("#p-toppings").change(function () {
        $(this).find(':selected').data('topping');
    });
        $("#p-crust").change(function () {
            $(this).find(':selected').data('crust');
        });
    });
})




//price selection//
$(document).ready(function () {

    $(".pizza-size").change(function (event) {
        var total = 0;
        $(".pizza-size").each(function () {
            total += parseInt($(this).val())

            $(".pizza-toppings").change(function (event) {
                $(".pizza-toppings").each(function () {
                    var toppingsTotal = total + parseInt($(this).val())

                    $(".pizza-crust").change(function (event) {
                        $(".pizza-crust").each(function () {
                            var crustTotal = toppingsTotal + parseInt($(this).val())

                            $(".form-quantity").change(function (event) {
                                $(".form-quantity").each(function () {
                                    var orderTotal = crustTotal * parseInt($(this).val())
                                    //$('input[type = "radio"]#yes-deliver').click(function () {               
                                    $(".towns").change(function (event) {
                                        $(".towns").each(function () {
                                            var finalCharges = orderTotal + parseInt($(this).val())
                                            //console.log(finalCharges)
                                            //alert("We got your order, your charges will be " + finalCharges)
                                                })
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
   
$(document).ready(function () {

    $(".pizza-size").change(function (event) {
        var total = 0;
        $(".pizza-size").each(function () {
            total += parseInt($(this).val())

            $(".pizza-toppings").change(function (event) {
                $(".pizza-toppings").each(function () {
                    var toppingsTotal = total + parseInt($(this).val())

                   $(".pizza-crust").change(function (event) {
                        $(".pizza-crust").each(function () {
                            var crustTotal = toppingsTotal + parseInt($(this).val())

                            $(".form-quantity").change(function (event) {
                                $(".form-quantity").each(function () {
                                    var orderTotal = crustTotal * parseInt($(this).val())

                                    $('input[type = "radio"]#no-deliver').click(function () {
                                        $("#submit").click(function () {
                                            alert("We got your order, total cost will be " + "Ksh." + orderTotal + " . Ready for pick-up in 15 min. ThankYou!")
                                        });
                                    });
                                });
                            });
                        });
                   });
                });
            });
        });
    });
});
$(document).ready(function(){
        $("#check-order").click(function(event){
            var inputtedName = $("input#new-customer-name").val();

            var newCustomer = new Customer(inputtedName)

            $("ul#contacts").append("<li><span class='contact'>" + newCustomer.customerName +"</span></li>")

            $("input#new-customer-name").val("");

        });
        $("#check-order").last().click(function(event) {
            $("#made-order").show();
            $("#made-order h3").text(newCustomer.customerName);
            $(".new-customer-name").text(newCustomer.customerName);
            
        });  
    });

 //$(document).ready(function(){
// document.querySelector('select').onchange = function(){
    // alert(this.selectedOptions[0].getAttribute('data-attr'))
// }
//})


