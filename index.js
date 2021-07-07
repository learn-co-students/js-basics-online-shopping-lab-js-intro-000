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
 var x = Math.floor(Math.random() * 101) + 1
 var cartWithPrice = {
   itemName: item,
   itemPrice: x
 }
 cart.push(cartWithPrice)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  var tempCart = []
  for (var i = 0; i < cart.length; ++i){
    tempCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (!cart.length){
    return ("Your shopping cart is empty.")
  } else if (cart.length < 3) {
    return (`In your cart, you have ${tempCart.join(', and ')}.`)
  } else {
    var x = tempCart.slice(-1)
    tempCart.pop()
    tempCart.push(`and ${x}`)
    return (`In your cart, you have ${tempCart.join(', ')}.`)
  }
}

function total() {
  // write your code here
  var x = 0
  for (var i = 0; i < cart.length; ++i){
    x = x + cart[i].itemPrice
  }
  return x
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0, x = 0; i < cart.length; ++i) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1), x = 1
    }
  }
  if (x === 0) {
    return ("That item is not in your cart.")
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.")
  } else {
    var x = 0
    for (var i = 0; i < cart.length; ++i){
      x = x + cart[i].itemPrice
    }
    cart.splice(0)
    return (`Your total cost is $${x}, which will be charged to the card ${cardNumber}.`)
  }
}
