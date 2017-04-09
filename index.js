var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var output = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      output += ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
      if (i < cart.length - 1) {
        output += ","
      } else {
        output += "."
      }
    }
    console.log(output)
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])[0]]
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var obj in cart[i]) {
      if (cart[i].hasOwnProperty(obj)) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    console.log(message)
  }
}
