var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  cart.push({itemName: item, itemPrice: Math.round(getRandomArbitrary(1,100))})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    var msg = "In your cart, you have"
    for (let i = 0, items = 1; i < cart.length; i++, items++) {
      if (i > 0) {
        msg = msg + ","
      }
      if (cart.length === items && items > 1) {
        msg = msg + " and"
      }
      msg = `${msg} ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    msg = msg + "."
    return msg
  }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var findIt = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      findIt = true
      cart.splice(i,1)
    }
  }
  if (findIt) {
    return cart
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  function total() {
    var total = 0
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].itemPrice
    }
    return total
  }
  if (cardNumber === "" || cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
      var totis = total()
      cart = []
      return `Your total cost is $${totis}, which will be charged to the card ${cardNumber}.`
  }
}
