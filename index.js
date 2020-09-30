var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push( {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1} )
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) return 'Your shopping cart is empty.'

  let result = "In your cart, you have";

  for(let i = 0; i < cart.length; i++) {
    result += `${i === cart.length - 1 && i !== 0 ? ' and' : ''} ${cart[i].itemName} at $${cart[i].itemPrice}${i === cart.length - 1 ? '.' : ','}`
  }

  return result
}

function total() {
  // write your code here
  let totalPrice = 0;
  for(let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }

  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  let index;
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) index = i
  }

  if(index === undefined) return 'That item is not in your cart.'

  cart.splice(index, 1)
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) return "Sorry, we don't have a credit card on file for you.";

  let cost = total();
  cart = [];

  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
