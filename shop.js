


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



var cartCount = 0;

//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.content');
    
  
    var title = shopProducts.querySelector('.product-name').innerText;
    var price = shopProducts.querySelector('.price h4').innerText;
    var productImgElement = shopProducts.querySelector('.proimg');
    var productImg = productImgElement ? productImgElement.src : '';

    cartCount++;
    var cartCountElement = document.querySelector(".cart-count");
    cartCountElement.innerText = cartCount;


    addProductToCart(title, price, productImg);

    updatetotal();
}


function addProductToCart(title, price, productImg) {
    // Create a new cart item element
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-box");
  
    // Build the HTML for the cart item using the provided product information
    cartItem.innerHTML = `
      <img src="${productImg}" class="cart-product-img" width="70" height="80">
      <div class="cart-product-details">
        <h4 class="cart-product-title">${title}</h4>
        <p class="cart-product-price">${price}</p>
      </div>
      <input type="number" class="cart-quantity" value="1" />
      <button class="cart-remove-button">Remove</button>
    `;
  
    // Add the cart item to the cart container
    var cartContainer = document.querySelector(".scart .cart-title");
    cartContainer.insertAdjacentElement("afterend", cartItem);
    
    var removeButton = cartItem.querySelector(".cart-remove-button");
    removeButton.addEventListener("click", removeCartItem);
  
  }
 

//update Total

function updatetotal() {
        var cartItems = document.querySelectorAll(".cart-box");
        var totalPrice = 0;
      
        cartItems.forEach(function(cartItem) {
          var priceElement = cartItem.querySelector(".cart-product-price");
          var quantityElement = cartItem.querySelector(".cart-quantity");
          var price = parseFloat(priceElement.innerText.replace("N", "").replace(",", ""));
          var quantity = parseInt(quantityElement.value);
          var itemTotal = price * quantity;
          totalPrice += itemTotal;
        });
      
        var totalElement = document.querySelector(".total-price");
        totalElement.innerText = "N" + totalPrice.toFixed(2);
    }   

    //remove cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();

    cartCount--;
    var cartCountElement = document.querySelector(".cart-count");
    cartCountElement.innerText = cartCount;

    updatetotal();
}

//ham

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active')
});


