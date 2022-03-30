//user-interface logic
$(document).ready(function () {
    $('input[type = "radio"]#no-deliver').click(function () {
        $(".location").hide();
    });
    $('input[type = "radio"]#yes-deliver').click(function () {
        $(".location").show();
    });
});


$(document).ready(function(){
    $('#addpizza').click(function(event){
        event.preventDefault()

        var form = document.getElementById('order');
        var vegan = document.getElementById('vegeterian');
        if(vegan.checked === true){
            console.log('Vegan Pizza');
        } else {
            //non-vegan
        };
        var nonVegan = document.getElementById('non-vegeterian');
        if(nonVegan.checked === true){
            console.log('Non-Vegan Pizza');
        } else {
            // vegan
        };

        var pizzaSize = $("#size").val();
        var pizzaCrust = $("#crust").val();
        var pizzaToppings = $("#toppings").val();
        var newOrder = pizzaSize + pizzaCrust + pizzaToppings;
        console.log(newOrder);


        //PIZZA PRICES
        if (pizzaSize === 'small'){
            console.log(500);
        } else if (pizzaSize === 'medium'){
            console.log(750);
        } else if (pizzaSize ==='large'){
            console.log(900);
        } else {
            alert('Pizza Size required for full meal!')
        }

       
        
        $('#pizza-message').append("<tr>" + "<td>" + pizzaSize + "</td>" + "<td>" + pizzaCrust + "</td>" + " " + "<td>" + pizzaToppings +"</td>" + "</tr>")
        form.reset();
    });
});