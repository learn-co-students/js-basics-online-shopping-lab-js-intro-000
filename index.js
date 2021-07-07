var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;  
  cart.push( {"itemName" : item, "itemPrice" : price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    for (var i=0; i<cart.length; i++) {
      if (i === 0) {
        cartItems.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`); 
      } else if (i<cart.length-1 && i > 0){
        cartItems.push( ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`); 
      } else if (i == cart.length-1) {
        cartItems.push(` and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`); 
      }
    }
    return `In your cart, you have ${cartItems}.`;
  }
}

function total() {
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i]["itemPrice"];
  }
  return sum;
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (cart[i]["itemName"] === item) {
     cart.splice(i, 1);
     return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  var amount = total();
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`;
  }
}
