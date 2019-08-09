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
 cart.push({[item]: Math.floor(Math.random() * 100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var cart_list = "In your cart, you have "

  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  } else if (cart.length == 1) {
      cart_list = cart_list + Object.keys(cart[0])[0] + " at $" + Object.values(cart[0])[0] + "."
  } else {
    for (var i = 0; i < cart.length-1; i++) {
      if (cart.length == 2) {
        cart_list = cart_list + Object.keys(cart[i])[0] + " at $" + Object.values(cart[i])[0] + " "
      } else {
        cart_list = cart_list + Object.keys(cart[i])[0] + " at $" + Object.values(cart[i])[0] + ", "
      }
    }
    cart_list = cart_list + "and " + Object.keys(cart[i])[0] + " at $" + Object.values(cart[i])[0] + "."
  }
console.log(cart_list)
}

function total() {
  // write your code here
  var cart_total = 0;

  for (var i = 0; i < cart.length; i++) {
    cart_total = cart_total + Object.values(cart[i])[0]
  }

  return cart_total
}

function removeFromCart(item) {
  // write your code here
  var found = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      found = true
    }
  }

  if (found == false) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber == null) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
