var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 101)
 }
 
 cart.push(itemObj);
 
 return `${itemObj.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  
  var listCart = [];
  for(var i = 0; i < cart.length; i++) {
    if(cart.length > 1 && cart[i] == cart[cart.length - 1] ) {
      listCart.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`);
    } else {
      listCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
  
  return `In your cart, you have ${listCart.join(", ")}.`;
  
}

function total() {
  var cartTotal = 0;
  for(var i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(item == cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } 
  var totalCost = total();
  cart = [];
  
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}

















