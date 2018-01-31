var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var obj = {};
 obj[item] = Math.floor((Math.random() * 100) + 1);
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart
}

function viewCart() {
  var currentCart = [];

  if (cart.length === 0){
    console.log('Your shopping cart is empty.');

  } else {
    for (var i=0; i < cart.length; i++){
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey]
      currentCart.push(`${itemKey} at $${itemValue}`);
      }
  }

  if (currentCart.length === 1){
    console.log(`In your cart, you have ${currentCart.join(" ")}.`)
  } else if (currentCart.length === 2){
    console.log(`In your cart, you have ${currentCart.join(" and ")}.`)
  } else if (currentCart.length > 2){
    var lastItem = currentCart.pop();
    console.log(`In your cart, you have ${currentCart.join(", ")}, and ${lastItem}.`)
  }
}

function total() {
  var total = 0;
  for (var i=0; i < cart.length; i++) {
    var itemKey = Object.keys(cart[i])[0];
    var itemPrice = cart[i][itemKey];
    total = total + itemPrice;
  }
    return total;
  }

function removeFromCart(item) {
for (let i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)){
    cart.splice(i, 1);
    return cart
  }
}
console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var totalCart = total();
  if(cardNumber){
  console.log(`Your total cost is $${totalCart}, which will be charged to the card ${cardNumber}.`);
} else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }

cart = [];
}
