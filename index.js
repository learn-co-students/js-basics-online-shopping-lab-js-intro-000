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
  var obj = { itemName: item, itemPrice: Math.floor(Math.random*100+1)}
  cart.push(obj);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart.length === 0) {
      return 'Your shopping cart is empty.';
    } else if(cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    } else {
      var str = 'In your cart, you have ';

      while(i < cart.length-2)
      {
        str = str + `${cart[i].itemName} at $${cart[i].itemPrice}, `
        i++;
      }
      str = str + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`

      return str;
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
