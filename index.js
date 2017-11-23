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

var getCart = function () {
  return cart;
}

var addToCart = function (item) {
    var newItem = item;
      cart.push({[newItem]: Math.floor(Math.random() * 100)});
      console.log(`${item} has been added to your cart.`)
    return cart
}


var viewCart = function () {
  if (Object.keys(cart).length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var productPairs = [];
    for (var i in cart) {
      var product = Object.keys(cart[i])[0];
      productPairs.push(` ${product} at $${cart[i][product]}`);
    }
    console.log(`In your cart, you have${productPairs}.`);
  }
}

var removeFromCart = function (itemName) {
  for(var i = 0; cart.length > i; i++) {
    var itemObj = cart[i];
    if (itemObj.hasOwnProperty(itemName)) {
      cart.splice(i,1);
    }
    return cart;
  }
  console.log('That item is not in your cart.');
}



function placeOrder(cardNumber) {
   if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
   } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   }
   cart = []
 }
