var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
var price = Math.floor(Math.random() * 100) +1;
var item = {itemName: name, itemPrice: price}
 cart.push(item)
 return `${name} has been added to your cart.`
}

function viewCart() {
  if (cart.length ===0) {
    return "Your shopping cart is empty."
  } else {
    var output = `In your cart, you have`}
    for (let a = 0; a < cart.length; a++) {
      if (cart.length-1 === a && a > 0) {
        output = output + ` and ${getCart()[a].itemName} at $${getCart()[a].itemPrice}.`
      } else if (cart.length ===1) {
        output = output + ` ${getCart()[a].itemName} at $${getCart()[a].itemPrice}.`
      } else {
        output = output + ` ${getCart()[a].itemName} at $${getCart()[a].itemPrice},`
      }
    }
    return output
}

function total() {
let totalCost = 0 // this is the initial value that we start with before we actually start adding to it
for (let i = 0; i <cart.length; i++) {
  totalCost += getCart()[i].itemPrice // this is totalCost = totalCost + n
}
return totalCost
}

function removeFromCart(item) {
let itemExists = 0
for (let b = 0; b < cart.length; b++) {
  if (item === cart[b].itemName) {
    cart.splice(b, 1)
    itemExists = 1
  }
}
  if (itemExists === 0) {
    return "That item is not in your cart."
} else {
  return cart
}
}

function placeOrder(cardNumber) {
    if (cardNumber) {
      let totalCost = total()
      cart.splice(0, cart.length)
      return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
    } else {
      return "Sorry, we don't have a credit card on file for you."
  }
}
