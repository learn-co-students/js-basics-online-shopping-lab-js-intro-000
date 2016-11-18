var cart = {}

function getCart() {
  return cart
}

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

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var newLine = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (let i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      newLine.push(item + " at $" + cart[i][item]);
    }
}
console.log("In your cart, you have " + newLine.join(", ") + ".");
}
}

function removeFromCart(item) {
  var length = 0;
  for(var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      length++;}
    }
    }
    if (length === 0) {
    console.log("That item is not in your cart.");}
    return cart
}

function placeOrder(cardNumber) {
  if(cardNumber > 0) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
    else {console.log("We don't have a credit card on file for you to place your order.")}
    cart = [];
}
