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
 var itemsPrice = Math.floor(Math.random() * 100) + 1;
 var itemObj = {
   itemName:item,
   itemPrice:itemsPrice
 };
 getCart().push(itemObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(getCart().length <= 0){
    return 'Your shopping cart is empty.';
  }
  return cartItemsDescription();
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < getCart().length; i++) {
    total += getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < getCart().length; i++) {
    if(getCart()[i].itemName === item){
      // remove the item at this position
      getCart().splice(i, 1);
      break;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined || cardNumber.length === 0){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var totalValue = total();
  getCart().length = 0;
  return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`;
}

function cartItemsDescription(){
  var desc = "In your cart, you have "
  for (var i = 0; i < getCart().length; i++) {
    if(i > 0){
      desc += ', ';
      if(i === getCart().length - 1){
        desc += "and ";
      }
    }
    desc += `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
  }
  return desc + ".";
}
