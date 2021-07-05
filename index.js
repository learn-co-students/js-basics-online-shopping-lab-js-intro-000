var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 })
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  let cartLength = cart.length;
  if (cartLength <= 0) {
    return 'Your shopping cart is empty.'
  }
  let message = 'In your cart, you have '
  for (let i = 0; i < cartLength; i++) {
    message += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if (i < cartLength - 1) {
      message += ', '
    } 
    if (i === cartLength - 2) {
      message += 'and '
    }
  }
  return message += '.'
}

function total() {
  return cart.reduce(function(sum, item) {
    return sum + item.itemPrice
  }, 0)
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (arguments.length < 1) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  let cartTotal = total()
  cart = []
  return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
