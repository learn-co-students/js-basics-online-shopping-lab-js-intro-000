var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var i = new Object({ itemName: item, itemPrice:Math.floor(Math.random() * 100) })
 cart.push(i)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  var scart = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  for (var i = 1; i < cart.length; i++){
    scart += `, `
    if (i === cart.length - 1){
      scart += `and `
    }
    scart += `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  scart += `.`
  return scart
}

function total() {
  var tot = 0
  for (var i = 0; i < cart.length; i++){
    tot += parseInt(cart[i].itemPrice)
  }
  return tot
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  var tot = total()
  cart = []
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
}
