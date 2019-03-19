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
    itemPrice: Math.floor(Math.random() * 100 + 1)
  })
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var inCart = []
    for (let i = 0; i < cart.length; i++) {
      var normal = `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (i === 0) {
        normal = `In your cart, you have ${normal}`
      } else if (cart.length > 1 && i + 1 === cart.length) {
        normal = `and ${normal}`
      }
      if (i + 1 === cart.length) {
        normal = `${normal}.`
      }
      inCart.push(normal)
    }
    return inCart.join(', ')
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
