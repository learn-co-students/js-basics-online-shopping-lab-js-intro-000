var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100) + 1;
var item = Object.assign({itemName: item}, {itemPrice: price})
 cart.push(item)
 return `${Object.values(item)[0]} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}, and ${Object.values(cart[1])[0]} at $${Object.values(cart[1])[1]}.`
  } else if (cart.length >= 3) {
      var array = []
        for (let i = 0; i < cart.length; i++) {
          if (i+1 < cart.length) {
            array.push(` ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}`)
          } else if (i+1 === cart.length) {
            array.push(` and ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}.`)
          }
      } return `In your cart, you have${array}`
    }
  }

function total() {
  let totalCost = []
  let i = 0
  for (let i = 0; i < cart.length; i++) {
    totalCost.push(Object.values(cart[i])[1])
  } return totalCost.reduce(function(a, b){
        return a + b;
    }, 0)
}

function removeFromCart(item) {
  // write your code here
  var allItems = []
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart;
    }
  }
  if (item != cart[item]) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.splice(0, cart.length)
    return message
  }
}
