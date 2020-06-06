var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {
   itemName: item,
   itemPrice: getRandomInt(99) + 1
 }
 cart.push(newItem)
 return $`{itemName} has been added to your cart.`
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function viewCart() {
  // write your code here
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
