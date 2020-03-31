var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemInfo = {};

 // returns a random integer from 1 to 100
 var price = Math.floor(Math.random() * 100) + 1;

 itemInfo[itemName] = item;
 itemInfo[itemPrice] = price;

 cart.push(itemInfo);

 return `${item} has been added to your cart.`;
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
