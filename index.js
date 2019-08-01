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
 const price = Math.floor(Math.random() * 100) + 1

 cart.push({ itemName : item, itemPrice : price})

 return item
}

function viewCart() {
  // write your code here
  const items = []

  for (let i = 0; i < cart.length; i++) {
    items.push(`${cart[i].itemName} at $${cart[i].itemPrice}}`)
  }

  return `In your cart, you have ${items.join(", ")}.`
}

function total() {
  // write your code here
  var sum = 0

  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].itemPrice
  }

  return sum
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === cardNumber) {
      cart.splice(i, 1)

      return cart
    }
  }

  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }

  const cost = totalCost()

  cart.splice(0)

  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
