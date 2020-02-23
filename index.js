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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    let array = []
    cart.forEach((item, index) => {
      if (index == cart.length-1) {
        array.push(`and ${item.itemName} at $${item.itemPrice}.`)
      } else if (index == 0) {
        array.push(`In your cart, you have ${item.itemName} at $${item.itemPrice}`)
      } else {
        array.push(`${item.itemName} at $${item.itemPrice}`)
      }
    })
    return array.join(", ")
  }
  // write your code here
}

function total() {
  let sum = 0
  cart.forEach(item => {
    sum += item.itemPrice
  })
  return sum
  // write your code here
}

function removeFromCart(item) {
let found
  cart.forEach(elem => {
    if (elem.itemName == item) {
      found = true
      cart.splice(cart.indexOf(elem), 1)
      return
    } else {
      found = false
      return
    }
  })
    return found ? cart : "That item is not in your cart."
  // write your code here
}

function placeOrder(cardNumber = null) {
  let til = total()
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${til}, which will be charged to the card ${cardNumber}.`
  }
  // write your code here
}
