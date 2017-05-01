var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 let price = Math.floor(Math.random() * 100)
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`);
 return cart
}

function viewCart() {
  // write your code here
  let cartContents
  let len = cart.length

  if (len > 0) {
    cartContents = "In your cart, you have"
    for (let i=0; i<len; i++) {
      for (var item in cart[i]) {
        if (cart[i].hasOwnProperty(item)) {
          cartContents += ` ${item} at $${cart[i][item]},`
        }
      }
    }
    console.log(cartContents.slice(0,-1)+'.');
  }
  else {
    console.log('Your shopping cart is empty.');
  }
}

function total() {
  // write your code here
  let cartValue = 0
  let len = cart.length

  for (let i=0; i<len; i++) {
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        cartValue += cart[i][item]
      }
    }
  }

  return cartValue
}

function removeFromCart(item) {
  // write your code here
  let i=0
  let len = cart.length
  let found = false


  while (i<len && !found) {
    if (cart [i].hasOwnProperty(item)) {
      //remove item
      cart.splice(i,1)
      found = true
    }
    else {
      i++
    }
  }
  if (!found) {
    console.log('That item is not in your cart.');
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = []
}
