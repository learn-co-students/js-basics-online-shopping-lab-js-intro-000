var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
   cart.push({[item]:price});

   console.log( [item] + " has been added to your cart.")

   return cart;
}

function viewCart() {

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return;
  } else {

  for (var i = 0; i < cart.length; i++) {
    console.log(" In your cart, you have " + cart + " at $" + [i] + ".")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
