var cart = []

function getCart() {

 return cart
}
function setCart(c) {
  cart = c
}

function addToCart(item) {

	// we need a new object
  var newone = {}
  // we need to use the new object we created in order to set the key as the value of item and the value of the key price
  var price = Math.floor(Math.random()*100);
  newone ={[item]:price};
  cart.push(newone); // then we need to push that object into the cart

  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length < 1)
    console.log('Your shopping cart is empty.');

  var msg = `In your cart, you have `;
  for (var i=0; i<cart.length; i++){
    for(var itemName in cart[i]){
      msg += `${[itemName]} at $${cart[i][itemName]}`;
    }
    if (i < cart.length-1) msg += `, `;
    else msg += `.`;
  }
  console.log(msg);
}

function total() {
  // write your code here
  var sum = 0;
  for(var i=0, l=cart.length; i < l; i++){
    for (var itemName in cart[i]){
    sum = sum + cart[i][itemName];
    }
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty(item)){
        cart.splice(cart[i], 1);
        return cart;
      }
    }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber)
    console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = 0; i < cart.length; i++) {
      cart.pop();
    }
  }
}
