var flag1=1;
var flag2=1;
//shows tab when sale is pressed
function show_buy()
{
    if(flag1%2==1)
    {
        $(document).ready(function(){
            $("#buy").show(500);
        })
    }
    else{
        $(document).ready(function(){
            $("#buy").hide(500);
            $("#price").hide(500);
        })
    } 
    flag1++; 
}
//shows tab when add to cart is pressed
function show_pay_option()
{
    if(flag2%2==1)
    {
        $(document).ready(function(){
            $("#price").show(500);
        })
    }
    else
    {
        $(document).ready(function(){
            $("#price").hide(500);
        })
    }
    flag2++;
}
//increases value of items when + is pressed
function inc_value()
{
    document.getElementById("text-pair").value++;
}
//decreases value of items when - is pressed
function dec_value()
{
    if(document.getElementById("text-pair").value!=0)
    document.getElementById("text-pair").value--;
}
//enables/disables input field email when stripe checkbox is checked in apple pay form
function enable_stripe_apple()
{
    if(document.getElementById("apple-pay-form-stripe-check").checked==true)
    document.getElementById("apple-pay-form-stripe-text").disabled=false;
    else{
        
    document.getElementById("apple-pay-form-stripe-text").disabled=true;
    document.getElementById("apple-pay-form-stripe-text").value="";
    }
}
//enables/disables input field email when paypal checkbox is checked in apple pay form
function enable_paypal_apple()
{
    if(document.getElementById("apple-pay-form-paypal-check").checked==true)
    document.getElementById("apple-pay-form-paypal-text").disabled=false;
    else{
        
    document.getElementById("apple-pay-form-paypal-text").disabled=true;
    document.getElementById("apple-pay-form-paypal-text").value="";
    }
}
//shows apple form when img is pressed
function show_apple_pay_form()
{
    $(document).ready(function(){
        $("#apple-pay-form").toggle(500);
    })
}
//shows offline method option when offline payment option in apple pay is clicked
function show_jquery()
{
    $(document).ready(function(){
        $("#jquery").toggle(500);
    })
}