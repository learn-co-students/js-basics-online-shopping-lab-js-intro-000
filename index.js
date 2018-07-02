var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    let price = Math.floor(Math.random() * 100)
    cart.push({ itemName: item, itemPrice: price})
    return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0)
    return 'Your shopping cart is empty.'
  var contents = 'In your cart, you have '
  for (let i = 0; i < cart.length; i++){
    contents += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if (i <= cart.length - 2)
      contents += ', '
    if (i === cart.length - 2)
      contents += 'and '
  }
  contents += '.'
  return contents
}

function total() {
  var value = 0
  for (let i = 0; i < cart.length; i++)
    value += cart[i].itemPrice
  return value
}

function removeFromCart(item) {
  var removedItems = 0
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1)
      removedItems++
    }
  }
  if (removedItems === 0)
    return 'That item is not in your cart.'
  else return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
    return "Sorry, we don't have a credit card on file for you."
  var orderSummary = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return orderSummary
}
