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
 cart.push({itemName: [item], itemPrice: Math.random * Math.floor(100) + 1})

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at "$"${cart[0].itemPrice}}`
  } else {
    for (let i = 0; i < cart.length; i++) {
      var response = "In your cart, you have"
      if(i === cart.length -1) {
        response = response + ` and ${cart[i].itemName} at "$"${cart[i].itemPrice}.`
      } else {
        response = response + ` ${cart[i].itemName} at "$"${cart[i].itemPrice},`
      }
    }
  }
}

function total() {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    var sum = 0

    sum += cart[i].itemPrice

    return sum
  }
}

function removeFromCart(item) {
  // write your code here
  var j = 0

  for (let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      array.splice(i, 1)
    } else {
      i++
      j = i
    }
  }
  if (j = cart.length - 1) {
    return "That item is not in your cart"
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === "") {
    return "Sorry, we don't have a credit card on file for you."
  }  else {
    var response = `Your total cost is "$"${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return response
  }
}
