var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var name = `${item}`
  var price = Math.floor(Math.random()*100)
  var itemObj = {itemName: name , itemPrice: price}
  cart.push(itemObj);
  return itemObj.itemName + ' has been added to your cart.'
}

function viewCart() {
  var string = "In your cart, you have";
  var output
  if (cart.length == 0){
    return 'Your shopping cart is empty.'
  }
  else if (cart.length == 1) {
    string = `${string} ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return `${string}`
  }
  else {
    for (let i = 0 ; i < cart.length ; i++){
        if (i < cart.length - 1) {
          string = `${string} ${cart[i].itemName} at $${cart[i].itemPrice},`
        }
        else if (i == cart.length - 1){
          string = `${string} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      }
      return `${string}`
    }
  }
function total() {
  var totalPrice = 0
  for (let i = 0 ; i < cart.length ; i++){
    totalPrice = totalPrice + getCart()[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (item === cart[i].itemName){
      cart.splice(i, 1)
    }
  }
  if (item != cart[item]){
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    var charge = total()
    cart = []
    return `Your total cost is $${charge}, which will be charged to the card ${cardNumber}.`
  }
}
