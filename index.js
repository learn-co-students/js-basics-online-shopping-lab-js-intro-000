var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var temp = {};
  temp[item] = Math.floor(Math.random() * 100);
  cart.push(temp);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
} else {
    var result = `In your cart, you have`;
    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0];
      result += ` ${itemName} at $${cart[i][itemName]},`;
  }
    result = result.slice(0, result.length-1);
    result = result += ".";
}
  console.log(result);
}

function total() {
  var tot = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])[0];
    tot += cart[i][itemName];
  }
  return tot;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])[0];
    if (itemName === item) {
      delete Object.keys(cart[i])[0];
    }
}}

function placeOrder(cardNumber) {
  // write your code here
}
