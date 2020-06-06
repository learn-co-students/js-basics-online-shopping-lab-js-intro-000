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
 return `${item} has been added to your cart.`
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function viewCart() {
  if(cart.length === 0){
    return 'Your Shopping cart is empty.'
  }
  for(var i = 0; i < cart.length; i++ ){
    var vC = [i]
  }
  return vC
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
