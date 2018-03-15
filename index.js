var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  else {
    const goods = []

    for (let i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && i != 0) {
        goods.push(`and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
      }
      else {
        goods.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
      }
    }
    return `In your cart, you have ${goods.join(', ')}.`
  }
}

function total() {
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i]["itemPrice"]
  }
  return sum
}

function removeFromCart(item) {
  const removed = []
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      removed.push(cart.splice(i, 1))
    }
  }
  if (!removed.length) {
    return "That item is not in your cart."
  }
  else {
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    const sum = total()
    cart = []
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
