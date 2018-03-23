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
 cart.push(Object.assign({}, {itemName: item}, {itemPrice: Math.floor(Math.random() * 100)}))
 return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var cartContents = "In your cart, you have "
  for(let i = 0; i < cart.length; i++) {
    if (i === cart.length - 1) {
      if (cart.length === 1) {
        cartContents += `${cart[i]['itemName']} at \$${cart[i]['itemPrice']}.`
      } else {
        cartContents += `and ${cart[i]['itemName']} at \$${cart[i]['itemPrice']}.`
      }
    } else {
      cartContents += `${cart[i]['itemName']} at \$${cart[i]['itemPrice']}, `
    }
  }
  return cartContents
}

function total() {
  // write your code here
  var total = 0
  if (cart.length === 0) {
    return total
  } else {
    for(let i = 0; i < cart.length; i++) {
        total += cart[i]['itemPrice']
    }
    return total
  }
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalCost = total()
  cart.length = 0
  return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`
}
