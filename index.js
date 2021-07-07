var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
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
  var cartLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    // index the 0-th element of the key (an array) of the object at the i-th element of cart
    var itemName = Object.keys(cart[i])[0];
    if (itemName === item) {
      cart.splice(i,i+1);
    }
  }
  var newCartLength = cart.length;
  if (cartLength === newCartLength) {
    console.log("That item is not in your cart.");
 }else{
    return cart;
 }
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
