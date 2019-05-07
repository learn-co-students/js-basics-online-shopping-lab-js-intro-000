var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var itemObj = Object.assign({}, {itemName: item}, {itemPrice: Math.floor(Math.random() * 100) + 1})
    cart.push(itemObj)
    return `${item} has been added to your cart.`
}

function viewCart() {
  var itemNamesAndPrices = 'In your cart, you have '

  if(cart.length == 0) {
    return 'Your shopping cart is empty.'
  } else {

  for (var i = 0; i < cart.length; i++) {

      if (cart.length == 1) {
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`

    } else if (cart.length == 2) {
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`

    } else {
      if (i < (cart.length - 1)) {
      itemNamesAndPrices = itemNamesAndPrices + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
    } else {
      itemNamesAndPrices = itemNamesAndPrices + `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
    }

    }

  }
  return itemNamesAndPrices
}
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    totalValue += cart[i]['itemPrice']
  }
  return totalValue
}

function removeFromCart(item) {
  var originalLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] == item) {
      cart.splice(i,1)
    }
  }
  if (cart.length == originalLength) {
    return "That item is not in your cart."
  } else {
    return cart
  }

}

function placeOrder(cardNumber) {
  if (cardNumber > 0) {
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
