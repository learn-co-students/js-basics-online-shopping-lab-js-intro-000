var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {var price = Math.floor(Math.random()*100);
                          Object.assign(cart, {[item]: price});
                          console.log(`${item} has been added to your cart.`);
                          return cart}

 // write your code here}

function viewCart() {var cartHossz = Object.keys(cart);
                    if (!cartHossz.length) {console.log('Your shopping cart is empty.')}
                    else {for (var aru in cart) {console.log(`In your cart you have ${aru} ${cart[aru]}`)}}}
  //CART.LENGTH MIÉRT = 0????


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
