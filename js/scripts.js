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
    $("#check-order").click(function(){
    $("#p-size").change(function () {
        alert($(this).find(':selected').data('size'));
    });
});
    $("#pizza-toppings").change(function () {
        alert($(this).find(':selected').data('topping'));
    });
        $("#pizza-crust").change(function () {
            alert($(this).find(':selected').data('crust'))
        });
    });




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

                                            $("#submit").click(function () {
                                                alert("We got your order, total cost will be " + "Ksh." + finalCharges + " . Your pizza will be delivered to you in 20 minutes.")
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
                                            alert("We got your order, total cost will be " + "Ksh." + orderTotal + " . Ready for pick-up in 15 min")
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
$(document).ready(function () {

})
