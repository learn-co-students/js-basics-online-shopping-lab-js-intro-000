var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let currentCart = []
  let counter = 0
  while (counter < cart.length) {
    currentCart.push(`${cart[counter].itemName} at $${cart[counter].itemPrice}`)
    counter++
  }
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else if (cart.length < 2) {
    return `In your cart, you have ${currentCart}.`
  } else {
    let lastItem = currentCart.splice(-1)
    return `In your cart, you have ${currentCart.join(', ')}, and ${lastItem}.`
  }
}

function total() {
  // write your code here
  let counter = 0
  let total = 0
  while (counter < cart.length) {
    total += cart[counter].itemPrice
    counter++
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  debugger;
  let counter = 0
  let found
  while (counter < cart.length) {
    if (cart[counter].itemName === item ) {
      cart.splice(counter, 1)
      found = true
    }
    counter++
  }
  return found === true ? getCart() : "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    let cartTotal = total()
    cart = []
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
