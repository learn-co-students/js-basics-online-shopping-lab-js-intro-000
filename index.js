var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 1) + 1) ;
  //console.log(price)
  var list = {'itemName': [item], 'itemPrice': price};
  cart = [...cart, list];
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    var items = 'In your cart, you have ';
    for(var i = 0; i < cart.length-1; i++){
      items += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    return `${items}and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
}

function total() {
  // write your code here
  var totalAmount = 0;
  for(var i = 0; i < cart.length; i++){
    totalAmount += cart[i].itemPrice;
  }
  return totalAmount;
}

function removeFromCart(item) {
  // write your code here
  var i = 0
  for(i; i < cart.length; i++){
    if(`${cart[i].itemName}` === item){
      cart.splice(i, 1);
      break;
    }
  }
  if(i === cart.length){
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    var totalPrice = total()
    cart = []
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
