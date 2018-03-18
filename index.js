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
 cart.push( {[item]:Math.floor(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var openingLine = 'In your cart, you have'
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length === 1) {
    var tempKey = Object.keys(cart[0])
    console.log(`${openingLine} ${tempKey} at $${cart[0][tempKey]}.`)
  }
  else if (cart.length === 2) {
    var firstKey = Object.keys(cart[0])
    var secondKey = Object.keys(cart[1])
    console.log(`${openingLine} ${firstKey} at $${cart[0][firstKey]} and ${secondKey} at $${cart[1][secondKey]}.`)
  }
  else {
    var cartSpread = []
//    var finalItem = cart.length - 1
//    var finalKey = Object.keys(cart[finalitem])
    for (var i = 0; i < cart.length - 1; i++) {
      var tempKey = Object.keys(cart[i])
      cartSpread.push(` ${tempKey} at $${cart[i][tempKey]}`)
    }
//  var finalItem = cart.length - 1
  var finalKey = Object.keys(cart[cart.length-1])
  cartSpread.push(` and ${finalKey} at $${cart[cart.length-1][finalKey]}.`)
  console.log(openingLine + cartSpread)
  }
}

function total() {
  // write your code here
  var priceTotal = 0
  for (var i = 0; i < cart.length; i++) {
    var tempKey = Object.keys(cart[i])
    priceTotal = priceTotal + cart[i][tempKey]
  }
  return priceTotal
}

function removeFromCart(item) {
  // write your code here
//  var itemName = item
  var matchIndex = 0
  for (var i = 0; i < cart.length; i++) {
    if (String(Object.keys(cart[i])) === item) {
      matchIndex = i
      i = cart.length
    }
    else {}
  }
  if (cart.hasOwnProperty(matchIndex)) {
  if (String(Object.keys(cart[matchIndex])) === item) {
    cart.splice(matchIndex,1)
    return cart
  }
  else {
    console.log('That item is not in your cart.')
    return cart
  }
}
  else {
    console.log('That item is not in your cart.')
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
