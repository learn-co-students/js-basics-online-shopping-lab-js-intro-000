var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemObject = {
    itemName: item,
    itemPrice:price
  }
  cart[cart.length] = itemObject
  return item + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }

  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else{
    var response = `In your cart, you have `
    for(let i = 0; i < cart.length - 1; i++){
      response = `${response}${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    response = `${response}and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return response
  }
}

function total() {
  var totalPrice = 0
  for(let i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var present = 'no' //is the item in the cart? we assume not
  for(let i = 0; i < cart.length; i++){ //for loop looks for the item
    if(cart[i].itemName === item){ //item is found, spliced out, and marked as present.
      cart.splice(i,1)
      present = 'yes'
    }
  }
  if(present === 'no'){ //item is not there, tell user such
    return "That item is not in your cart."
  }
  else if(present === 'yes'){ //item is there, return cart
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    var totalPrice = total()
    cart = []
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
