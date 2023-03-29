let views = document.getElementById("pageviews");
let slider = document.getElementById("slide-input");
let price = document.getElementById("price");
let discount = document.getElementById("discount-switch");

slider.addEventListener("input", calculate);

let toggle = false;
let priceValue = 16.00;

discount.addEventListener("input", calculate);

function calculate() {
    if(slider.value == 1) {
        priceValue = 8.00;
        views.innerHTML = "10K pageviews";
        price.innerHTML = (parseFloat(priceValue));
    }else if(slider.value == 2) {
        priceValue = 12.00;
        views.innerHTML = "50K pageviews";
        price.innerHTML = (parseFloat(priceValue));
    }else if(slider.value == 3) {
        priceValue = 16.00;
        views.innerHTML = "100K pageviews";
        price.innerHTML = (parseFloat(priceValue));
    }else if(slider.value == 4) {
        priceValue = 24.00;
        views.innerHTML = "500K pageviews";
        price.innerHTML = (parseFloat(priceValue));
    }else if(slider.value == 5) {
        priceValue = 36.00;
        views.innerHTML = "1M pageviews";
        price.innerHTML = (parseFloat(priceValue));
    }
    discountFun();
}

function discountFun() {
    if(discount.checked) {
        price.innerHTML = priceValue / 4;
    }
}


