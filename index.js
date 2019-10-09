var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()* 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart // write your code here
}

function viewCart() {
  var item
  var c = `In your cart, you have`

  if (typeof cart[0] !== 'undefined') {
    for (var i = 0, l = cart.length; i < l; i++) {
      var itemName = Object.keys(cart[i])
      c =  c + ` ${itemName} at $${cart[i][itemName]},`
    }
    c = c.replace(/.$/,".")
    console.log (c)
  }

  else {
    console.log("Your shopping cart is empty.")
  }
 // write your code here
}

function total() {
  var total = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    var itemName = Object.keys(cart[i])
    total =  total + parseInt(cart[i][itemName])
  }
  return total
  // write your code here
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    var itemName = Object.keys(cart[i])
    if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
      return cart
    }
}
  console.log("That item is not in your cart.")   // write your code here
}

function placeOrder(cardNumber) {
if (!cardNumber){
  console.log('We don\'t have a credit card on file for you to place your order.')
}
else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
  // write your code here
}
