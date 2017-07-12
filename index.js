var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random() * 100);
cart.push({[item]: itemPrice});
console.log(`${item} has been added to your cart.`);
return cart;
 // write your code here
}

function viewCart() {
  if (cart.length === 0) {
   console.log("Your shopping cart is empty.");
  } else {
    var str = "In your cart, you have";
    var items = [];
    var lastItem = '';
    for (var i = 0; i < cart.length; i++) {
      if (i>0 && i === cart.length-1){
        lastItem = `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
      } else {
        items.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)
      }
    }
  if (lastItem === '' && items.length === 1){  console.log(`${str} ${items}.`)}
else if(lastItem !== '' && items.length === 1){console.log(`${str} ${items} and ${lastItem}.`)}
else{   console.log(`${str} ${items.join(', ')}, and ${lastItem}.`)}
  }
};

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}
function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var cartObject = cart[i];
    if (cartObject.hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}



function placeOrder(cardNumber) {
  var t = total()
if (cardNumber){
  console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  return cart;
}
else {
  console.log(`Sorry, we don\'t have a credit card on file for you.`)

    }

}
