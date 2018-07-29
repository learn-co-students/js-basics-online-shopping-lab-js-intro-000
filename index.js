var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 99 + 1)
 var item = {[itemName]: itemPrice}
 if (cart.push(item)){
   console.log(`${itemName} has been added to your cart.`)
 }

 return cart
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    console.log('Your shopping cart is empty.')
  }
  var cartContenets = ""
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    var itemName = Object.keys(object)
    var itemPrice = object[itemName]

    if (i === 0){
      cartContenets += `In your cart, you have ${itemName} at $${itemPrice}`
    }else  {
      if (i + 1 === cart.length && cart.length === 2){
        cartContenets += ' and'
      }else if (i + 1 === cart.length && cart.length > 2) {
        cartContenets += ', and'
      }else {
        cartContenets += ','
      }
      cartContenets += ` ${itemName} at $${itemPrice}`
    }
  }
  cartContenets += '.'
  console.log(cartContenets)
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    var itemName = Object.keys(object)
    var itemPrice = object[itemName]
    total += itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart = cart.slice(0, i).concat(cart.slice(i +1))
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
