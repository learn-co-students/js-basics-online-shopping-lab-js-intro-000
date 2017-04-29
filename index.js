var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var itemPrice = Math.random(Math.floor() * 100)
  cart.push({[item]: itemPrice})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var cartItemsAndPrice = [];
    for(var i = 0; i < cart.length; i++) {
      for(var item in cart[i]) {
        cartItemsAndPrice.push(item + " at $" + cart[i][item]);
      }
    }
    console.log("In your cart, you have " + cartItemsAndPrice.join(", ") + ".");
  }
}

function total() {
  var cartTotal = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      cartTotal += cart[i][item]
    }
  }
  return cartTotal;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
        if(item === item) {
          cart.splice(i, 1)
          return cart
        }
      }
    }
          console.log("That item is not in your cart.")
  }

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
  return cart;
}
}
