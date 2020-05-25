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
 var newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}
 cart.push(newItem)
 return `${newItem['itemName']} has been added to your cart.`
}

function viewCart() {
  if(cart.length == 0){
    return "Your shopping cart is empty."
  }
  else{
    var string = "In your cart, you have "
    for(let i = 0; i < cart.length; i++){
      if(i == 0){
        string = string + `${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if (i == (cart.length - 1) ) {
        string = string + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else{
        string = string + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
  return `${string}.`
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
  var index_1 = -1
  if(cart.length == 0){
    return "That item is not in your cart."
  }
  else{
    for(let i=0; i < cart.length; i++){
      if(cart[i].itemName === item){
        index_1 = i
      }
    }
    if(index_1 == -1){
      return "That item is not in your cart."
    }
    else{
      let newCart = cart.splice(index_1,1)
      return cart
    }
  }
}

function placeOrder(cardNumber) {
  if( (typeof cardNumber) == 'undefined' ){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var totalInCart = total()
    let newCart = cart.splice(0,cart.length)
    return `Your total cost is $${totalInCart}, which will be charged to the card ${cardNumber}.`

    return cart
  }
}
