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
 var price = Math.floor(100*Math.random());
 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    console.log("Your shopping cart is empty.")
  } else {
    var stringArray = [];
    for(var i=0; i<cart.length; i++){
      var cartItem = cart[i];
      for(var key in cartItem){
        stringArray.push(`${key} at $${cartItem[key]}`);
      }
    }
    if(cart.length == 1){
      console.log(`In your cart, you have ${stringArray}.`);
    } else if(cart.length == 2){
      var cartString = `${stringArray[0]} and ${stringArray[1]}`;
      console.log(`In your cart, you have ${cartString}.`);
    } else {
      stringArray[stringArray.length-1] = "and " + stringArray[stringArray.length-1];
      var cartString = stringArray.join(", ");
      console.log(`In your cart, you have ${cartString}.`);
    }
  }
}

function total() {
  // write your code here
  var totalCost = 0;
  for(var i=0; i<cart.length; i++){
    var cartItem = cart[i];
    for(var key in cartItem){
      totalCost += cartItem[key];
    }
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  var newCart = [];
  for(var i=0; i<cart.length; i++){
    var cartItem = cart[i];
    for(var key in cartItem){
      if(key !== item){
        newCart.push(cart[i]);
      }
    }
  }
  if(newCart.length === cart.length){
    console.log("That item is not in your cart.");
    return cart;
  } else {
    cart = newCart;
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    var totalCost = total();
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
    return cart;
  }
}
