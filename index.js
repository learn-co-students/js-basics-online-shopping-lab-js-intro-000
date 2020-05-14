var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function convertToItem(itemName){
  var item = {itemName: itemName, itemPrice: Math.floor(Math.random()*100)}
  return item;
}

function addToCart(item) {
  var item = convertToItem(item);
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  var status = 'In your cart, you have ';
  if (cart.length >= 1) {
    status += `${cart[0].itemName} at $${cart[0].itemPrice}`;
  }
  if (cart.length >= 2) {
    var middle = '';
    for (var i = 1; i < cart.length - 1; i++) {
      middle += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    status += `${middle}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;
  }
  return `${status}.`;
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var searchResult;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {searchResult = cart[i]}
  }
  if(searchResult){
    var indexOfItemToRemove = cart.indexOf(searchResult);
    return cart.splice(indexOfItemToRemove,1);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
