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
 var num = Math.floor(Math.random() * 100) + 1
 var obItem = { itemName: item, itemPrice: num }
 cart.push(obItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var line = 'In your cart, you have'
  if (cart.length === 0) {
    line = "Your shopping cart is empty."
  } else if (cart.length === 1) {
    line = `${line} ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    for (var i = 0; i < cart.length - 1; i++) {
      line = `${line} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    line = `${line} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
  }
  return line
}

function total() {
  // write your code here
  var num = 0
  for (var i = 0; i < cart.length; i++) {
    num = num + cart[i].itemPrice
  }
  return num
}

function removeFromCart(item) {
  // write your code here
  var count = cart.length
  if (count > 0) {
    var i = 0
    while (cart.length === count) {
      if (item === cart[i].itemName) {
        cart.splice(i, 1)
      }
      i++
    }
  }
  if (cart.length === count) {
    return "That item is not in your cart."
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var line = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.splice(0)
    return line
  }
}
