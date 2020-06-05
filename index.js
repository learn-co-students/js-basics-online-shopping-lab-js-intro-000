var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 var i = cart.length
 var object = {itemName:`${item}`, itemPrice:price};
 cart[i] = object
 return `${item} has been added to your cart.`
}

function viewCart() {
  var totalCart = ``
  var i = cart.length
  if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else if (cart.length > 2) {
    var i = 0
    var sentence = [`In your cart`]
    while (i < cart.length) {
      if (i == cart.length-1) {
        var j = i + 1
        sentence[j] = ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        i = i + 1
        return sentence.toString()
      } else if (i == 0) {
        var j = i + 1
        sentence[j] = ` you have ${cart[i].itemName} at $${cart[i].itemPrice}`
        i = i + 1
      } else {
        var j = i + 1
        sentence[j] = ` ${cart[i].itemName} at $${cart[i].itemPrice}`
        i = i + 1
      }
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var totsmalots = 0
  var i = 0
  while (i < cart.length) {
    totsmalots = totsmalots + cart[i].itemPrice
    i = i + 1
  }
  return totsmalots
}

function removeFromCart(item) {
  var i = 0
  var placement = 0
  if (cart[0] == undefined) {
  return `That item is not in your cart.`
  } else
  while (i < cart.length) {
    if (cart[i].itemName == item) {
      placement = i
      i = cart.length
    } else {
      i = i + 1
    }
  }
if (item == cart[placement].itemName) {
    cart.splice(placement,1)
  } else {
    return `That item is not in your cart.`
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var end = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return end
  }
}
