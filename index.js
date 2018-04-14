var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let random = Math.floor((Math.random() * 100) + 1),
    cart_item = {itemName: item, itemPrice: random}; 
  cart.push(cart_item);
  return `${item} has been added to your cart.`
}

function viewCart() {
  let cartSize = cart.length, 
    phrase = "In your cart, you have",
    cartItems = [], 
    i;
  
  // create ["name at $price"] filled array
  for (i=0;i<cartSize;i++) {
    cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
    
  if (cartSize >= 3) {
    cartItems = cartItems.join(",%%").split("%%");
    cartItems.splice(-1,0,"and"); // can't chain since the return value is []
    return `${phrase} ${cartItems.join(" ")}.` ;
    
  } else if (cartSize == 2) {
    return `${phrase} ${cartItems.join(", and ")}.`;
    
  } else if (cartSize == 1) {
    return `${phrase} ${cartItems[0]}.`;
    
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  let cartSize = cart.length, 
    total = 0,
    i;
  
  for (i=0;i<cartSize;i++) { 
    total += cart[i].itemPrice; 
  }
  return total 
}

function removeFromCart(item) {
  let cartSize = cart.length, i;
  
  for (i=0;i<cart.length;i++) { 
    if (cart[i].itemName == item) {
      cart.splice(i,1);
      return;
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  let msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  
  if (cardNumber) {
    cart.length = 0;
    return msg;
  } else {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
}
