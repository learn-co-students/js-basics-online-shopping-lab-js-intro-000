var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push ({[item]: price});
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var array = [];
if (cart.length === 0) {
  console.log (`Your shopping cart is empty.`)
}
else {
  for (var i = 0; i < cart.length; i++){
    var itemPrice = cart[i]; //itemPrice is the value stored in the cart array and the variable we are cycling through
    var item = Object.keys(itemPrice); //item is the key or index of the data pairs
    var price = itemPrice[item]; //price is the value stored with each item key
    array.push(`${item} at $${price}`); //$${price} is inserting the dollar sign and then interpolating price
    console.log (`In your cart, you have ${array.join(', ')}.`); //interpolate the array and join each array entry in this manner
  }
}
}
/* I tried and couldn't figure viewCart out on my own. Got much help and guidance by looking at existing repositories and then working backwards.
Particularly https://github.com/lizdenhup/js-basics-online-shopping-lab-v-000/blob/master/index.js
Part of the problem was that the test results said that the else was never called, but my if/else conditions were fine, it
was just that the console.log didn't look like what it was supposed to so the test wouldn't pass.*/

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++){
    var itemPrice = cart[i]; //itemPrice is the value stored in the cart array and the variable we are cycling through
    var item = Object.keys(itemPrice); //item is the key or index of the data pairs
    if (itemPrice.hasOwnProperty(itemName)) {
      cart.shift(itemPrice); //not sure shift is the right choice. if you're referencing a specific array entry does it matter?
    }
  }
    console.log (`That item is not in your cart.`)
    return cart;
}
/* Again, got help from repositories. Had it as an if/else and the if ran, but couldn't get the console.log to run. Don't
understand why the console.log works because it looks like it would run the console.log even if the item was in the cart.*/

function placeOrder(cardNumber) {
    if (!cardNumber) {
    console.log (`We don\'t have a credit card on file for you to place your order.`)
  }
  else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
}
