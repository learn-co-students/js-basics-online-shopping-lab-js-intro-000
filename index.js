var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item, price) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0){
  console.log('Your shopping cart is empty.');
} else {
  var itemarry = [];
  for(var i = 0; cart.length > i; i++){
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];
  itemarry.push(`${item} at $${price}`);
  }
  console.log(`In your cart, you have ${itemarry.join(', ')}.`);
}
}

function removeFromCart(item) {
  for(var i = 0; cart.length > i; i++){
  var itemObj = cart[i];
  if(itemObj.hasOwnProperty(item)){
    cart.splice(i,1);
  }
  return cart;
}
  console.log('That item is not in your cart.');
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
