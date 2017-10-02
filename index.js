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
 var obj = {};
 obj[item] = Math.floor((Math.random() * 100) + 1);
 cart.push(obj);
 //cart[item] = Math.floor((Math.random() * 100) + 1);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var cartText = '';
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  } else if (cart.length < 2){
    return(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`)
  } else if (cart.length < 3){
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]} and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`)
  } else {
    for (var i = 0; i < cart.length; i++){

        if (i < cart.length - 1){
        cartText =cartText + `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, `
        }
     else {
      cartText = cartText + `and ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}.`
    }
    }
    console.log(`In you cart, you have ${cartText}`)
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
