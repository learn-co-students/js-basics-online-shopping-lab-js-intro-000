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

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return "Your shopping cart is empty."
  }

  const items = []

  for (let i = 0; i < cart.length; i++) {
    items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }

  if (cart.length === 1) {
    return `In your cart, you have ${items.join(", ")}.`
  }

  return `In your cart, you have ${items.slice(0, -1).join(", ")}, and ${items.slice(-1)}.`

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
    if (cart[i].itemName === item) {
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

  const cost = total()

  cart.splice(0)

  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
