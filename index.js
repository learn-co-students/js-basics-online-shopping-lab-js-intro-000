var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor((Math.random() * 100))
 var itemObject = {}
 itemObject[`${item}`] = itemPrice
 cart.push(itemObject)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (!cart.length) {
    console.log('Your shopping cart is empty.')
  } else {
    var itemPrices = []
    for (var i = 0; i < cart.length; i++) {
      var itemObject = cart[i]
      var item = Object.keys(itemObject)[0]
      var price = `$${itemObject[item]}`
      itemPrices.push(`${item} at ${price}`)
    }
    console.log(`In your cart, you have ${itemPrices.join(', ')}.`)
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var itemObject = cart[i]
    var item = Object.keys(itemObject)[0]
    var price = itemObject[item]
    total += price
  }
  return total
}

function removeFromCart(item) {
  var initialCartLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    var cartItem = cart[i]
    if (cartItem.hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  if (cart.length === initialCartLength) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
