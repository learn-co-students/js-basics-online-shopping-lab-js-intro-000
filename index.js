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

var addToCart = (item) => {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  var output = []
  for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)
    var price = itemAndPrice[item]
    output.push(item + " at $" + price)
  }
  console.log(`In your cart, you have ${output.join(', ')}.`)
}

var removeFromCart = (item) => {
  var itemPresent = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i) + (cart.slice(i + 1))
      itemPresent = true
    }
  }
  if (itemPresent == false) {
    console.log("That item is not in your cart.")
  }
  return cart
}

var placeOrder = (cardNumber) => {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var total = 0
    for (var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)
      var price = itemAndPrice[item]
      total = total + price
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
