var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// accepts one argument, the name of an item
// create an "item" object consist of two key-value pairs:  itemName, itemPrice
// the price of each item is a randomly-generated integer between 1 and 100.
function addToCart(item) {
  var newItem = new Object({'itemName':  item, 'itemPrice': Math.floor((Math.random() * 100) + 1)})
  cart.push(newItem)
  return(`${newItem.itemName} has been added to your cart.`)
}

// loop over every item in the cart:
// prints 'Your shopping cart is empty.' if the cart is empty
// print the cart contents in the format below:
// "In your cart, you have (item) at $(price), (item) at $(price), and (item) at $(price).
function viewCart() {
  var msg = "In your cart, you have "
  if (cart.length === 0) {
    msg = "Your shopping cart is empty."
  } else if (cart.length === 1) {
    msg += `${cart[0].itemName} at \$${cart[0].itemPrice}.`
  } else {
    msg = "In your cart, you have "
    for (let i = 0; i < cart.length; ++i) {
      (i === cart.length -1) ? msg += `and ${cart[i].itemName} at \$${cart[i].itemPrice}.` : msg += `${cart[i].itemName} at \$${cart[i].itemPrice}, `
    }
  }
  return(msg)
}

function total() {
  // iterates through the cart array, and returns the current total value of the items in the cart.
  var total = 0
  var i = 0
  while (i < cart.length) {
    total += cart[i].itemPrice
    ++i
  }
  return total
}

// removes the specified item from the cart
// alerts you if you're trying to remove an item that isn't in your cart
function removeFromCart(item) {
  var msg = ""
  for (let i = 0; i < cart.length; ++i) {
    if (cart[i].itemName === item) {
      cart.splice(1,1)
    }
  }
  if (msg === "") {
    msg = "That item is not in your cart."
  }
  return msg
}

function placeOrder(cardNumber) {
  // ✓ doesn't place the order if a credit card number is not provided
  // ✓ places an order when a credit card number is provided
  // ✓ empties the cart
  var msg = "Sorry, we don't have a credit card on file for you."
  if (typeof cardNumber !== 'undefined' && cardNumber !== '') {
    msg = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`
    cart.length = 0
  }
  return msg
}
