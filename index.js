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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)

  cart.push({[item]: price})

  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var output = "In your cart, you have "

  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (var i = 0; i < cart.length - 1; i++){
      var key = Object.keys(cart[i])[0]
      output = output + key + " at $" + cart[i][key] + ", "
    }
    var finalKey = Object.keys(cart[cart.length - 1])[0]
    output = output + finalKey + " at $" + cart[cart.length - 1][finalKey] + "."
  }
  console.log(output)
}

function removeFromCart(item) {
  var itemRemoved = 0
  var newCart = []

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      itemRemoved = 1
      for (var x = 0; x < i - 1; x++) {
        newCart.push(cart[x])
      }
      for (var x = i + 1; x < cart.length; x++) {
        newCart.push(cart[x])
      }
      cart = newCart
      itemRemoved = 1
    }
  }
  if (itemRemoved == 1) {
    return cart
  }
  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(card = -1) {
  if (card != -1) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    cart = []
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
