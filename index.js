var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // add item to cart as an object to an array
 var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}

 cart.push(obj)
 // return cart
 return `${item} has been added to your cart.`
}

function viewCart() {
  // displays all items in the cart
  if (!cart.length) {
    return "Your shopping cart is empty."
  }

  const inCart = []

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    for (var i = 0; i < cart.length - 1; i++) {
      inCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    const last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`
    return `In your cart, you have ${inCart.join(', ')}, and ${last}.`
  }
}

function total() {
  // shows the total price of all items
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
  sum += cart[i].itemPrice
}
return sum
}

function removeFromCart(item) {
  // removes an item from the cart
  var counter = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      counter++
    }
  }
    if (counter == 0) {
      return "That item is not in your cart."
    }
return cart
}

function placeOrder(cardNumber) {
  // return totals

  if (isNaN(cardNumber)) {
  return "Sorry, we don\'t have a credit card on file for you."
} else {
  var num = total()
  empty()
  return `Your total cost is $${num}, which will be charged to the card ${cardNumber}.`
}
}

function empty() {
  cart.length = 0
}
