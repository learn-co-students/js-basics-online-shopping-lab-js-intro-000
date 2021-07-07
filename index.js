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
 var new_item = {
    itemName : item,
    itemPrice : Math.floor(Math.random()*100)
 };

 getCart().push(new_item);
 return `${new_item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (!getCart().length) {
    return "Your shopping cart is empty.";
  }
  var i = 0;
  var results = "";
  while (i < getCart().length) {
    if (getCart().length === 1) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
    }
    if (i === getCart().length -1) {
      return `In your cart, you have ` + results + `and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
    }
    results = results + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `;
    i += 1;
  }
}

function total() {
  // write your code here
  var i = 0;
  var total = 0;
  while (i < getCart().length)  {
    total = total + getCart()[i].itemPrice;
    i += 1;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var i = 0;
  while (i < getCart().length) {
    if (getCart()[i].itemName === item) {
     getCart().splice(i,1);
      return getCart();
    }
    i += 1;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return `Sorry, we don\'t have a credit card on file for you.`;
  }
  var total_price = 0;
  total_price = total();
  cart = [];
  return `Your total cost is $${total_price}, which will be charged to the card ${cardNumber}.`;
}
