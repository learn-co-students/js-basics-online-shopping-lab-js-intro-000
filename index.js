var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item1) {
 //generate price
 var price = Math.floor(Math.random() * 100);
 cart.push({[item1]:price});

 console.log(`${item1} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  else{
    var output = "In your cart, you have ";
    for(var i=0;i<cart.length;i++){

      for(var item in cart[i]){
        output = output + `${item} at $${cart[i][item]}`;
      }

      //add punctuation
      if(i+1<cart.length){
        output = output + ', ';
      }
      else {
        output = output +'.';
      }
    }
    console.log(output);
  }

}

function total() {
  var total = 0;
  for(var i=0;i<getCart().length;i++){
    var itemDict = getCart()[i];
    var key = Object.keys(itemDict);
    var value = itemDict[key];
    total += value;
  }
  return total;
}

function removeFromCart(item) {
  for(var i=0;i<getCart().length;i++){
    if(getCart()[i].hasOwnProperty(item)){
      //remove from cart and return cart
      getCart().splice(i,1);
      return getCart();
    }
  }
  //below will only happen if not in cart
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  else{
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
}
