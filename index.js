var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = (Math.floor(Math.random()*100)+1);
  var cartList = {itemName : item, itemPrice : price}
  cart.push(cartList)
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }
  else if (cart.length === 1){
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  else if (cart.length === 2){
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  else{
    var newString = "In your cart, you have "
    for (var x = 0; x < cart.length - 1; x++){
      newString = newString + `${cart[x].itemName} at $${cart[x].itemPrice}, `
    }
    return (newString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`)
  }

}

function total() {
  var newTotal = 0
  for (var x = 0; x < cart.length; x++){
    newTotal += cart[x].itemPrice
  }
  return newTotal
}

function removeFromCart(item) {
  for (var x = 0; x < cart.length; x++) {
    if (item === cart[x].itemName){
      cart.splice(x,1)
      return cart
    }
  }
  if (item != cart[item]) {
    return "That item is not in your cart."

  }
}


function placeOrder(cardNumber) {
  var cartTotal = total()
  if(cardNumber){
    cart.splice(0, cart.length)
    return (`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
  else{
    return "Sorry, we don't have a credit card on file for you."
  }
}

