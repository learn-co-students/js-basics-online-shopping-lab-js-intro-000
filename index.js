var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(100*Math.random())
  var itemObj = { itemName: item, itemPrice: price };
  cart.push(itemObj)
  return(`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0){
    return("Your shopping cart is empty.")
  }
  var text = "In your cart, you have "
  for(var i=0; i<cart.length; i++){
    if (cart.length == 1){
      text = text + `${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    else if (i === cart.length-1){
      text = text + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    if (i < cart.length-1){
      text = text + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return text
}

function total() {
  var totalCost = 0;
  for (var i=0; i<cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost
}

function removeFromCart(item) {
  var itemInCartIndex = -1;
  for(var i=0; i<cart.length; i++){
    if (cart[i].itemName === item){
      itemInCartIndex = i;
    }
  }
  if (itemInCartIndex<0) {
    return ("That item is not in your cart.")
  }
  cart.splice(itemInCartIndex,1)
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return ("Sorry, we don\'t have a credit card on file for you.")
  }
  var text = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return(text)
}
