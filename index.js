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
  var price = Math.floor(Math.random() * 100)
  cart.push({ [item]:price })
  console.log(item + ` has been added to your cart.`)
  return cart
}

function viewCart() {
  var l = cart.length
  if (!l) {
    return console.log('Your shopping cart is empty.')
  }
  else {
    var arr = []
    for (var i=0; i < cart.length; i++) {
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)
      var price = itemAndPrice[item]
      arr.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${arr.join(', ')}.`)
  }
}

function removeFromCart(item) {
  var hits = 0
  for (var i=0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var tempItem = Object.keys(itemAndPrice)
    if (tempItem == item) {
      hits++
      cart.splice(i, 1)
      return cart
    }
  }
  if (hits === 0) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
