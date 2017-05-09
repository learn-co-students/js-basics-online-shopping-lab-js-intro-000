var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var itemPrice = randomNum(0, 100)
 var itemToPush = item
 cart.push({[itemToPush]: itemPrice})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var array = []
  if (cart.length > 0) {
    for (var i in cart) {
      for (var item in cart[i]) {
        var price = cart[i]
        array.push(` ${item} at $${price[item]}`)
      }
    }
    console.log(`In your cart, you have${array}.`)
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function total() {
  // write your code here
  var cartTotal = 0
  for (var i in cart) {
  	for (var items in cart[i]) {
      var itemPriceToGet = cart[i]
  		var price = itemPriceToGet[items]
      cartTotal += price
  	}
  }
  console.log(`The total is: ${cartTotal}`)
  return cartTotal
}

function removeFromCart(item) {
  // write your code here
  var didRemoveItem = false
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      delete cart[i]
      cart.splice(i,1)
      didRemoveItem = true
    }
  }
  if (didRemoveItem == false) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber != undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
}

function randomNum(min, max) {
  return Math.floor(Math.random() * max) + min
}
