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
 let itemName = item; // passed in string
 let itemPrice = Math.floor(Math.random() * 100);
 let itemObj = { 
   "itemName" : itemName,
   "itemPrice" : itemPrice
 };
 cart.push(itemObj);
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) { // if cart is empty
    return "Your shopping cart is empty.";
  }
  
  let cartStr = "In your cart, you have";
  for (var i = 0; i < cart.length; i++) {
    (i === cart.length - 1 && i > 0) ? cartStr += " and" : cartStr += "";
    
    cartStr += ` ${cart[i].itemName} at $${cart[i].itemPrice}`;
    i === cart.length - 1 ? cartStr += "." : cartStr += ",";
  }
  
  return cartStr; // return the cart description
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice; // add the price of the item
  }
  return total; // return the total price of cart
}

function removeFromCart(item) {
  // write your code here
  
  if (cart[item] === undefined || null) {
    return "That item is not in your cart.";
  }  
    // delete property from cart object
    for (var i = 0; i < cart.length; i++) {
      var ele = cart[i];
      if (cart[i].item == cart[i].itemName) { 
        cart.splice(i , 1);
      }
    }
    
}

function placeOrder(cardNumber) {
  // write your code here
  let result; 
  let orderPlacement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  let no_card = "Sorry, we don't have a credit card on file for you.";
  cardNumber !== undefined ? result = orderPlacement : result = no_card;
  cart = []; // empty the cart after order is placed
  return result;
}
