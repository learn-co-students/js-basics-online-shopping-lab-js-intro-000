var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var new_item = {"itemName": item, "itemPrice": Math.floor(Math.random()*100)+1}
  cart.push(new_item)
return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    var items = []
    var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    for (let i = 0; i < cart.length - 1; i += 1) {
      items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
      return `In your cart, you have ${last}`
  } else {
    var items = []
    var last = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    for (let i = 0; i < cart.length - 1; i += 1) {
      items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
      return `In your cart, you have ${items.join(', ')}, and ${last}`
}
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i += 1) {
    sum += (cart[i].itemPrice)
  }
  return sum
}

function removeFromCart(item) {
  var itemName = []
  for (let i = 0; i < cart.length; i += 1) {
    itemName.push(cart[i].itemName)
    }
  var position = itemName.indexOf(item)
  if (position > -1) {
    cart.splice(position, 1)
    return cart
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var ttl_cost = total()
    cart = []
    return `Your total cost is $${ttl_cost}, which will be charged to the card ${cardNumber}.`
  }
}
