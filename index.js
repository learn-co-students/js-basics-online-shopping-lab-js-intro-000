// an array of objects
var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push( { [item]: Math.floor(Math.random() * 100) } )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function removeFromCart(item) {
  let inCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true
      cart.splice(i, 1)
    }
  }

  if (!inCart) {
    console.log('That item is not in your cart.')
  }

  return cart
}

function viewCart() {
  //only one call to .length
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  var itemsList = []

  for (let i = 0; i < l; i++) {
    for (var item in cart[i]) {
      itemsList.push(`${[item]} at $${cart[i][item]}`)
    }
  }

  return console.log(`In your cart, you have ${itemsList.join(', ')}.`)
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

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []

}
