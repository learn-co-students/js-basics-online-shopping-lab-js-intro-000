var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 function getRandomIntInclusive() {
  min = Math.ceil(100)
  max = Math.floor(1)
  return Math.floor(Math.random() * (max - min + 1)) + min
 }
 let newItem = {itemName: item, itemPrice: getRandomIntInclusive }
 cart.push(item)
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
