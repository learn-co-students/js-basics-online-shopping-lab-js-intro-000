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

var getCart = () => {
  return cart
}

var addToCart = (item) => {
  cart.push({ [item]: Math.floor(Math.random() * 100) })
  console.log(`${item} has been added to your cart.`)
  return cart
}

var viewCart = () => {
  if (cart.length > 0) {
    var string = "In your cart, you have "
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        string += `${item} at $${cart[i][item]}${i + 1 === cart.length ? '.' : ', '}`
      }
    }
    console.log(string)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

var removeFromCart = (item) => {
  var inCart = false
  for (var i = 0; i < cart.length; i += 1) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      inCart = true
    }
  }
  if (inCart === false) {
    console.log("That item is not in your cart.")
  }
}

var placeOrder = (cardNumber) => {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
