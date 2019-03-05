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
 var itemDetails = new Object();
 itemDetails.itemName = item;
 itemDetails.itemPrice = Math.floor(Math.random() * 101);
 cart.push(itemDetails);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var i;
  var cartString = 'In your cart, you have ';
  if (cart === undefined || cart.length == 0){
    return 'Your shopping cart is empty.';
  }
  else{
    for (i = 0; i < cart.length; i++){ // loop through cart, act upon key-value pairs
      var itemInCart = cart[i];
      if (i === cart.length - 1 && cart.length > 1){
        cartString = cartString + `and ${itemInCart.itemName} at $${itemInCart.itemPrice}.`; // conditional within loop... if (i === cart.length - 1) (the last item), and + name, price + . ELSE
      }
      else if (cart.length === 1){
        cartString = cartString + `${itemInCart.itemName} at $${itemInCart.itemPrice}.`;
      }
      else{
        cartString = cartString + `${itemInCart.itemName} at $${itemInCart.itemPrice}, `;
      }
    }
    return cartString;
  }

}

function total() {
  // write your code here
  var i;
  var totalvalue = 0;
  for (i = 0; i < cart.length; i++){
    var value = cart[i].itemPrice;
    var totalvalue = totalvalue + value;
  }
  return totalvalue;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else{
    var cartTotal = total();
    cart.length = 0; // empty cart array
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}
