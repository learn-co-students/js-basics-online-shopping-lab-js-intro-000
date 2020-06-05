var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var number = Math.floor(Math.random() * Math.floor(100))
  var object = {itemName: item, itemPrice: number}
  cart.push(object)
  return `${object.itemName} has been added to your cart.`
}

function viewCart() {
  var array = ["In your cart, you have"]
  var empty = "Your shopping cart is empty."

  for (var i = 0; i < cart.length; i++){
    if (cart.length === 1){
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}.`)
    } else if (i === (cart.length - 1) && cart.length > 1){
      array.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
    } else {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice},`)
    }
  }

  if (cart.length === 0){
    return empty
  }
  return array.join(' ')
}

function total() {
  return cart.map(x => x = x.itemPrice).reduce((x,y) => x += y)
}

function removeFromCart(item) {
  // if (cart.indexOf(item) < 0){
  //   return "That item is not in your cart."
  // } else {
  //   cart.splice(cart.indexOf(item), 1)
    const length = cart.length
    for (var i = 0; i < cart.length; i++){
      if (cart[i].itemName === item){
        cart.splice(i, 1)
      }
    }
    if (length === cart.length){
      return "That item is not in your cart."
    } else {
      return cart
    }
}


function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var tots = total()
    cart = []
    return `Your total cost is $${tots}, which will be charged to the card ${cardNumber}.`
  }
}
