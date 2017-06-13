var cart = []
var totalCost;

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100);
 var tempObj = {};
 tempObj[item] = price;
 cart.push(tempObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else{
    var tempString = "";
    for(var i = 0; i < cart.length; i++){
      var tempObj = cart[i];
      var item = Object.keys(tempObj);
      tempString = tempString + ` ${item} at $${tempObj[item]},`
    }
    tempString = `In your cart, you have` + tempString.slice(-1) + '.';
    console.log(tempString);
  }
}


function total() {
  // write your code here
  var tempTotal = 0;

  for(var i = 0; i < cart.length; i++){
      var tempObj = cart[i]
      var item = Object.keys(tempObj);
      tempTotal += tempObj[item];
  }

  totalCost = tempTotal;
  return totalCost;
}

function getItems(cart){
  var items = [];
  for(var i = 0; i < cart.length; i++){
    var tempObj = cart[i];
    var item = Object.keys(tempObj);
    items.push(item);
  }
  return items;
}

function removeFromCart(item) {
  var found = false;
  var idxToRemove;
  var newCart = [];
  for(var i = 0; i < cart.length; i++){
    var tempObj = cart[i];
    var tempItem = Object.keys(tempObj);
    if(tempItem === item){
      found = true;
      idxToRemove = i;
      break;
    }
  }
  if(found){
    var firstHalf = cart.slice(0,idxToRemove);
    var secondHalf = cart.slice((idxToRemove+1), cart.length);
    newCart = firstHalf.concat(secondHalf);
    cart = newCart;
    return cart;
  }
  else{
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which
    will be charged to the card ${cardNumber}.`)
  }
  else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = [];
}
