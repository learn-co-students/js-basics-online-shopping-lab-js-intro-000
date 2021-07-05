var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var items = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1};
 cart.push(items)
 return `${items.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  var defaulttext = 'In your cart, you have '
  if (cart.length === 1) {
    return `${defaulttext}${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  if (cart.length === 2) {
    return `${defaulttext}${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }

  if (cart.length >= 3) {
    return `${defaulttext}`
  }
}

function total() {
  let i = 0
  do {
    var sum = getCart()[i].itemPrice + getCart()[i+1].itemPrice
    i++
  } while (i < cart.length)
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
