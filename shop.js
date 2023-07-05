


//scart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.scart');
let closeCart = document.querySelector('#close');


//open cart
cartIcon.onclick = () => {
    cart.classList.add('active');

    console.log(cart);
};


//close cart
closeCart.onclick = () => {
    cart.classList.remove('active');

    console.log(closeCart);
};


//cart working
if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}


//Functionality
function ready() {
    // removing carts
    var removCartButtons = document.getElementsByClassName('rem');
    for (var i = 0; i < removCartButtons.length; i++) {
        var button = removCartButtons[i];
        button.addEventListener("click", removeCartItem);

    }

    //quantity change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    //Add to Cart
    var addCart = document.getElementsByClassName("addtocart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

//remove cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();

    updatetotal();
}


// quantity changes
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }

    updatetotal();
}


//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-name')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('proimg')[0];

    console.log(title, price);


    //addProductToCart(proimg);
    updatetotal();

}





//update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("N", ""));
        var quantity = quantityElement.value
        total = total + (price * quantity);



        document.getElementsByClassName('total-price')[0].innerText = "N" + total;
    }
}


//ham

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active')
});


