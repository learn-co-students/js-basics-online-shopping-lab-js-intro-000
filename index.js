var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let cartList = ''

  if(cart.length) {
    cartList = "In your cart, you have"

    for(let i = 0; i < cart.length; i++) {
      let currentItem = cart[i]
      for (var item in currentItem) {
        cartList += ` ${item} at $${currentItem[item]}${i < (cart.length - 1) ? ',':'.'}`
      }
    }
  } else {
    cartList = "Your shopping cart is empty."
  }

  console.log(cartList)
}

function removeFromCart(item) {
  let position = -1

  for(let i = 0; i < cart.length && position < 0; i++) {
    if (cart[i].hasOwnProperty(item)) {
      position = i
    }
  }

  if(position >= 0) {
    cart.splice(position, 1)
  } else {
    console.log("That item is not in your cart.")
  }

  return cart;
}

function placeOrder() {
  console.log(arguments.length ?
    `Your total cost is $${total()}, which will be charged to the card ${arguments[0]}.` :
    "We don't have a credit card on file for you to place your order.")
  cart = []
}
