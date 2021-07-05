var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random() * 100) + 1)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  var retString = ""
  var cartItem = {}

  if(cart.length === 0) {
    retString = "Your shopping cart is empty."
  }
  else {
    retString =  "In your cart, you have "

    for (var i = 0; i < cart.length; i++) {
      cartItem = cart[i]
      if (i > 0) {
        retString = retString + ", "
      }
      if (cart.length > 1 && i === cart.length - 1) {
        retString = retString + "and "
      }

      retString = retString + `${cartItem.itemName} at \$${cartItem.itemPrice}`
    }

    retString = retString + "."
  }

  return retString
}

function total() {
  var cartItem = {}
  var itemsTotal = 0

  for (var i=0; i < cart.length; i++) {
    cartItem = cart[i]
    itemsTotal = itemsTotal + cartItem.itemPrice
  }

  return itemsTotal
}

function removeFromCart(item) {
  var cartItem = {}

  for (var i=0; i < cart.length; i++) {
    cartItem = cart[i]

    if(cartItem.itemName === item) {
      cart.splice(i,1)
      return cart
    }
  }

  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var retString

  if (cardNumber === undefined) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    retString = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`
    cart  = []
    return retString
  }
}
