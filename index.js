var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100) + 1
  }
  cart.push(newItem)
  return `${item} has been added to your cart.`

}

function viewCart() {
  return getCart().length === 0 ? 'Your shopping cart is empty.' : generateCartDescription()
}

function total() {
  let cartValue;
  getCart().length ? cartValue = [] : cartValue = 0

  for (let i = 0; i < getCart().length; i++) {
    cartValue.push(getCart()[i].itemPrice)
  }
  return cartValue.reduce(function(a,b){return a + b})
}


function removeFromCart(item) {
  let itemToBeRemoved;
  for (let i = 0; i < getCart().length; i++) {
    if (item === getCart()[i].itemName) {
      itemToBeRemoved = getCart()[i]
    }
  } 

  return itemToBeRemoved ? removeItemFromCart(itemToBeRemoved) : 'That item is not in your cart.'

}

function removeItemFromCart(itemToBeRemoved) {
  let itemIndex = cart.indexOf(itemToBeRemoved)
  getCart().splice(itemIndex,1)
}


function placeOrder(cardNumber) {
  if (cardNumber) {
    let totalCost = total()
    setCart([])
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}

function generateCartDescription() {
  let cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >=2 ) {
    let middleItems = ''
    for (let i = 1; i < getCart().length-1; i++) {
      middleItems += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleItems}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}
