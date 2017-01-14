var cart = [];

function placeOrder(creditCard) {
  if (creditCard) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
    cart = []
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var printStr = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0]
      printStr += `${item} at $${cart[i][item]}`
      if (i < cart.length - 1) {
        printStr += ', '
      }
    }
    printStr += '.'
    console.log(printStr)
  }
}

function addToCart(item) {
  var obj = {[item]: Math.floor(Math.random() * 100)}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getCart() {
  return cart;
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
