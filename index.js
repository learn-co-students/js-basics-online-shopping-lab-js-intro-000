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
  var basicText = 'In your cart, you have ';
  var cartText = '';
  if (cart.length < 1){
    console.log('Your shopping cart is empty.')
  } else if (cart.length < 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`)
  } else if (cart.length < 3){
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`)
  } else {
    for (var i = 0; i < cart.length; i++){
      while (i < cart.length - 1){
        cartText = cartText + `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `;
        i++;
      }
      cartText = cartText + `and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`;
    }
    console.log(basicText+cartText);
  }
}

function total() {
  var total = 0;
  // write your code here
  for (var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item){
  let number = null;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === false){
      continue;
    } else {
      number = i;
    }
  }
  if (number !== null){
    let newCart = cart.splice(number, 1);
  } else {
    console.log('That item is not in your cart.')
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}
