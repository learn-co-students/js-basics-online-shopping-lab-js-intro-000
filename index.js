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
 var num = Math.floor(Math.random() * 100) + 1;

 item = {
   itemName: item,
   itemPrice: num
 };
 cart.push(item);

 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var output = "In your cart, you have ";

  if (cart.length == 1) {
    return output + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else
  if (cart.length > 1)
  {
    for (var i = 0; i < cart.length - 1; i++){
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
    return output + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
  else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
  var total = 0;

  for(var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var num = total();
    cart = [];
    return `Your total cost is $${num}, which will be charged to the card ${cardNumber}.`;
  }
}
