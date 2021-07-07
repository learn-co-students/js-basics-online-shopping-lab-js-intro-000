var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartSummary = `In your cart, you have `
  switch(cart.length){
    case 0:
      cartSummary = "Your shopping cart is empty."
      break;
    case 1:
      cartSummary += `${cart[0].itemName} at $${cart[0].itemPrice}.`
      break;
    default:
    for(var i = 0; i < cart.length; i++){
      if(i === cart.length - 1){
        cartSummary += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }else {
        cartSummary += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
  return cartSummary
}

function total() {
  var cost = 0
  for(var i = 0; i < cart.length; i++){
    cost += cart[i].itemPrice
  }
  return cost
}

function removeFromCart(item) {
  var check = cart.length
  for(var i =0; i< cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice([i],1)
    }
  }
  if(check > cart.length){
    return cart
  }else{
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if(!!cardNumber){
    var totalCost = total();
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}