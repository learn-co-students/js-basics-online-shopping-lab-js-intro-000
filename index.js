var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100);
 var obj = {[item]: price};
 console.log(`${item} has been added to your cart.`)
 cart.push(obj);
 return cart;
}

function viewCart() {
  // write your code here
  var result = "";
  if (cart.length == 0){
    result = "Your shopping cart is empty.";
  } else {
    result = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++){
      var obj = cart[i];
      var objname = Object.keys(obj)[0];
      result += `${objname} at $${obj[objname]}`;
      if (i < cart.length -1){
      result += ", ";
    } else {
      result += ".";
    }
    }
  }
console.log(result);
}

function total() {
  // write your code here
  var value = 0;
  for (var i = 0; i < cart.length; i++){
    var obj = cart[i];
    value += obj[Object.keys(obj)[0]];
  }
  return value;
}

function removeFromCart(item) {
  var result = -1;
  for (var i = 0; i < cart.length; i++){
    var obj = cart[i];
    if (obj.hasOwnProperty(item) && result == -1){
      result = i;
    }
  }
  if (result == -1){
    console.log("That item is not in your cart.");
  } else {
    cart.splice(result,1);
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);

  }
}
