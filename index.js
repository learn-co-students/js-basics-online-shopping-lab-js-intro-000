var cart = [
  {apple: 120},
  {orange: 130},
  {kiwi: 90}
]

var cart = new Array ();

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

function getCart () {
  return cart;
}

function addToCart (item) {
  var price = Math.floor(Math.random()*100)
  //cart[item] = price
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

/*
function viewCart () {
  if (typeof cart[0] == undefined) {
    console.log("Your shopping cart is empty.")
  }
  //for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart) {
      // console.log(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i].item}`)
      //WORKING console.log(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
      console.log(`In your cart, you have ${Object.keys(item)} at $${item[Object.keys(item)]}`)

          //}
  }
}*/

function viewCart () {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  var message = "In your cart, you have"
  for (var i = 0, l = cart.length; i < l; i++) {
    message += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
  }
  message = message.slice(0,-1) + "."
  console.log(message)
}

function removeFromCart (item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)]
      return cart
    }
    /*else if (i === cart.length - 1) {
      console.log("That item is not in your cart.")
    }*/
  }
  console.log("That item is not in your cart.")
}

function placeOrder (cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
}
