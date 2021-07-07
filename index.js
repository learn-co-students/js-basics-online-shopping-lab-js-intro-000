var cart = [];
// var cart = ["vanilla", "watermelon", "yams"];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function addToCart(itemName) {
  var item = {"itemName": itemName, "itemPrice": getRandomIntInclusive(1, 100)}
  cart.push(item)
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  var cart = getCart()
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var items = []
    for (var i = 0; i < cart.length; i++) {
      items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    if (items.length === 1) {
      return `In your cart, you have ${items[0]}.`
    } else {
      return `In your cart, you have ${items.slice(0, items.length-1).join(", ")}, and ${items[items.length-1]}.`
    }
  }
}

function total() {
  var cart = getCart()
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var cart = getCart()
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1)[0].itemName
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var sum = total()
    setCart([])
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
