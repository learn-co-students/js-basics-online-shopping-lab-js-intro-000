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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item] : Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemListArr = [];
    for(var i = 0; i < cart.length; i++) {
      for(var items in cart[i]) {
        itemListArr.push(`${items} at \$${cart[i][items]}`);
      }
    }
  console.log("In your cart, you have " + itemListArr.join(", ") + ".");
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cdNum) {
  if(cdNum) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cdNum}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
