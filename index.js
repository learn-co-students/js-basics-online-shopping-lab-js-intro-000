var cart = [];
var itemNames = [];
var pusher = [];

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
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getNames() {
  itemNames = []
  pusher = []
  for (var i = 0; i < cart.length; i++) {
    pusher = Object.keys(cart[i])
    itemNames.push(pusher[0])
  }
}

function viewCart() {
  if (cart.length > 0) {
    var complexString = ''
    getNames()
    for (var i = 0; i < cart.length; i++) {
      complexString = complexString + `${itemNames[i]} at $${cart[i][itemNames[i]]}`
      if (i < cart.length - 1) {
        complexString = complexString + ', '
      }
    }
    console.log(`In your cart, you have ${complexString}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  getNames()
  for (var i = 0; i < itemNames.length; i++) {
    if (itemNames[i] === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(number) {
  if (number === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    cart = []
    return cart
  }
}
