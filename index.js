var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random()*99)+1;
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;

}

function viewCart() {
  let ret = 'In your cart, you have'
  if(cart.length == 0)
    return 'Your shopping cart is empty.';
  if(cart.length == 1)
    return ret + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
  for(let i = 0; i < cart.length; i++){
    if(i == cart.length-1)
      ret += ` and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    else
      ret += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  }
  return ret += ".";
}

function total() {
  let ret = 0;
  for(let i = 0; i < cart.length; i++){
    ret += cart[i].itemPrice;
  }
  return ret;
}

function removeFromCart(item) {
  var itemToRemove = searchCartForItemToRemove(item);
  return itemToRemove ? removeItemFromCart(item) : 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
}


function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  //Array.prototype.splice()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  getCart().splice(indexOfItemToRemove,1)
}
