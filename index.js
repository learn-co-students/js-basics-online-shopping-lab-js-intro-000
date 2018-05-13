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
 var price = Math.floor(Math.random() * 100) + 1;
 cart.push({itemName: item, itemPrice: price});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return 'Your shopping cart is empty.';
  } else {
    var result = 'In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
      if ( i==0) {
        result += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      } else if (i==cart.length-1) {
             result += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
         } else {
           result += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
         }
     }
     result +='.';
     return result;
}
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i<cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false;
  if (cart.length === 0) {
    return "That item is not in your cart."
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item) {
        itemInCart = true;
        cart.splice(i, 1);
      }
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    var finalPrice = total();
    cart.length = 0;
    return `Your total cost is $${finalPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
