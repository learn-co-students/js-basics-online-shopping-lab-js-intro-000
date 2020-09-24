var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemDes = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1}
  cart.push(itemDes)
  return `${itemDes.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length > 1) {
    let printTxt = ""
    let printConcat = []
    let printLast = ""
      for (var i = 0; i < cart.length; i++) {
        if (i == 0) {
          printTxt = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
        } else if (i == (cart.length - 1)) {
            printLast = `, and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        } else {
            printConcat.push(`, ${cart[i].itemName} at $${cart[i].itemPrice}`)
        }
      }
    return printTxt + printConcat + printLast
  }
}

function total() {
  var totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var message = ""
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  }
}
