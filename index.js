var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random() * (100 - 1) + 1)
  var obj = {}
  Object.assign(obj, {[item] : price})
  //Object.assign(cart, {[item] : price})
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var str = 'In your cart, you have'

  if (cart.length === 0) {
    str = 'Your shopping cart is empty.'
  }
  else if (cart.length === 1) {
	str = `${str} ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
  }
  else if (cart.length === 2) {
 	for (var i = 0; i < cart.length - 1; i++) {
	  str = `${str} ${Object.keys(cart[i])} at $${Object.values(cart[i])}`
	}
	str = `${str} and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
  }
  else {
 	for (var i = 0; i < cart.length - 1; i++) {
	  str = `${str} ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
	}
	str = `${str} and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
  }
  console.log(str.slice(0,-1) + '.')
}

function total() {
  	var t = 0
	for (var i = 0; i < cart.length; i++) {
	  t = t + Number(Object.values(cart[i]))
	}
	return t
}

function removeFromCart(item) {
	var str = ''

	for (var i = 0; i < cart.length;i++) {
		var obj = {}
		str = cart[i]
		console.log(str)
		Object.assign(obj, str)
		console.log(obj)
		if (obj.hasOwnProperty(item)) {
			console.log(obj.hasOwnProperty(item))
			cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
