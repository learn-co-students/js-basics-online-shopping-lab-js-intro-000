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
 var a = []
 if (cart.length === 0){
	console.log('Your shopping cart is empty.')
 }
 for (var i = 0, l = cart.length; i < l; i++) {
	a.push(' ' + Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])])
  } if(cart.length > 0) {
	console.log(`In your cart, you have${a}.`)
 }
}

function total() {
  var a = []
  for (var i = 0, l = cart.length; i < l; i++) {
  a.push(cart[i][Object.keys(cart[i])])
  }
  return a[0] + a[1] + a[2]
}

function removeFromCart(item) {
  var obj = {}
  for (var i = 0, l = cart.length; i<l; i++){
    Object.assign(obj, cart[i])
  }
  if (obj.hasOwnProperty(item)) {
      delete obj[item]
      cart.length = 0
	  for (var name in obj) {
 		cart.push({[name]:obj[name]})
  	}
  }
  else {
      console.log('That item is not in your cart.')
  }
  return cart
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0
}
