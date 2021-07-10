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

var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var newItem = {};
  newItem[item] = price;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.");
  }
  var newArr = [];
  for (var i = 0; i < cart.length; i++) {
    var itemWithPrice = cart[i];
    var item = Object.keys(itemWithPrice)[0];
    var price = itemWithPrice[item];
    newArr.push(`${item} at \$${price}`);
  }
  console.log(`In your cart, you have ${newArr.join(', ')}.`);
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(card) {
  if (card === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = [];
  }
}
