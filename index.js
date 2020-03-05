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
 const price = Math.floor(Math.random() * 100);
 const newItem = new Object();
 newItem.itemName = item;
 newItem.itemPrice = price;
 cart.push(newItem);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
      if(cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`;
    } else if (cart.length >= 3) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i+1].itemName} at $${cart[i+1].itemPrice}, and ${cart[i+2].itemName} at $${cart[i+2].itemPrice}.`;
    }
  }
  return `Your shopping cart is empty.`;
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
     if(cart[i].itemName === item) {
        cart.splice(i, 1);
      }
    }
    return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.splice(0, cart.length);
    return string;
  }
  return `Sorry, we don't have a credit card on file for you.`;
}
