var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {itemName: `${item}`, itemPrice:Math.floor(Math.random()*100)}
  cart.push(newObject);
  return `${item} has been added to your cart.`
}

function viewCart() {
	if (cart.length == 0) {
		return 'Your shopping cart is empty.'
	} else if (cart.length == 1) {
		return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
	} else if (cart.length == 2) {
		return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
	} else {
		var beginningString = 'In your cart, you have ', stringList = []
		for (var i = 0; i < cart.length - 1 ; i++) {
			stringList.push(`${cart[i].itemName} at $${cart[i].itemPrice}, `)
			var combinedString = stringList.join('')
		} return beginningString + combinedString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
	}
}

function total () {
  var total = 0
	for (var i = 0; i < cart.length; i++) {
		total += cart[i].itemPrice;
	} return total
}

function removeFromCart (item) {
  var itemList = []
	for (var i = 0; i < cart.length; i++) {
    itemList.push(cart[i].itemName)
		if (item === cart[i].itemName) {
			cart.splice(i, 1);
			return cart;
		}
	} if (itemList.includes(item) == false ) {
    return 'That item is not in your cart.'
  }
}


function placeOrder(cardNumber = null) {
  var totalPrice = total()
	if (cardNumber === null) {
		return "Sorry, we don\'t have a credit card on file for you."
	} else {
    cart.splice(0, cart.length)
		return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
	}
}
