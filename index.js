var cart = [];

//Random Number Generator
function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Search for item to remove
function searchForItemToRemove(item) {
  var searchResult;
  for (var i = 0; i < getCart().length; i++) {
    if(getCart()[i].itemName === item) {
      searchResult = getCart()[i]
    }
  }
  return searchResult;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var item  = {
   itemName: itemName,
   itemPrice: getRandomNum(1, 100)
 };
 getCart().push(item);
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return "Your shopping cart is empty."
  }

  var cartText = "In your cart, you have ";
//One Item
  if(getCart().length >= 1) {
    cartText += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
//Two Items
  if(getCart().length >= 2) {
    var cartTextFiller = '';
    for (var i = 1; i < getCart().length - 1; i++){
     cartTextFiller += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartText += `${cartTextFiller}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${cartText}.`;
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i <getCart().length; i++){
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var itemToRemove = searchForItemToRemove(item)
  if(!itemToRemove){
    return "That item is not in your cart.";
  }else {
    var indexOfItemToRemove = cart.indexOf(itemToRemove)
    getCart().splice(indexOfItemToRemove, 1)
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if(arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }else {
    var sumToCharge = total();
    setCart([]);
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}
