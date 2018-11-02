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
    itemPrice: Math.floor(Math.random() * 100)});
    return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    var startingMessage = 'In your cart, you have '
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && cart.length === 1) {
        startingMessage += `${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
        if (cart.length > 1 && i === cart.length - 1) {
          startingMessage += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        } else {
            if (i >= 0 && i < cart.length - 1) {
              startingMessage += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
    }
  }
}
  return startingMessage
}

function total() {
  let totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i , 1);
      return getCart()
    }
  }
    return 'That item is not in your cart.'
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart = [];
  }
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
};
