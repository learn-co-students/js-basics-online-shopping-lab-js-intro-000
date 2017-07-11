var cart = [];

function getCart(itemName) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var  itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({[item]: itemPrice})
  console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  var msg = 'In your cart, you have';
  var myKey= '';
  if(cart.length == 0){
     msg = "Your shopping cart is empty.";
  } else if( cart.length == 1){
    myKey = Object.keys(cart[0])[0];
    msg = `In your cart, you have ${myKey} at $${cart[0][myKey]}.`;
  } else {
    for(var i = 0; i < cart.length; i++){
      myKey = Object.keys(cart[i])[0];
      if(i <  cart.length - 1){
        msg += ` ${myKey} at $${cart[i][myKey]},`;
      } else {
        if(cart.length == 2) {msg = msg.slice(0,-1)};
        msg += ` and ${myKey} at $${cart[i][myKey]}.`;
      }
    }
  }
  console.log(msg);
}

function total() {
  var sum = 0;
  var myKey =0;
  for(var i = 0; i < cart.length; i++){
    myKey = Object.keys(cart[i])[0];
    sum += cart[i][myKey];
  }
  return sum;
}

function removeFromCart(item) {
  var found = false;
  for(var i =0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      found = true;
      cart.splice(i,1);
    }
  }
  if(!found){
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber == undefined || cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart =[];
  }
  return cart;
}
