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
 var objet = new Object ();
 Object.assign(objet, {[item] : price()});
 cart.push(objet);
console.log(item + " has been added to your cart.");
 return cart;
}
function price(){
  return Math.floor((Math.random() * 100) + 1)
}

function viewCart() {
  // write your code here
var sentence = "In your cart, you have " ;
if (cart.length === 0){
console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1){
  var prop0 = Object.keys(cart[0]);
    sentence = sentence + `${prop0} at $${cart[0][prop0]}.`;
  } else if (cart.length === 2){
    var prop1 = Object.keys(cart[1]) ; prop0 = Object.keys(cart[0]);
      sentence = sentence + `${prop0} at $${cart[0][prop0]} and ${prop1} at $${cart[1][prop1]}.`;
  } else if( cart.length >= 3) {
    var i = 0;
    while ( i < cart.length ){

    var propN = Object.keys(cart[i]);
      if (i === cart.length-1){
        sentence = sentence + `and ${propN} at $${cart[i][propN]}.`;
      } else {
        sentence = sentence + `${propN} at $${cart[i][propN]}, `;
      }
      i++;
    }
  }
  console.log(sentence);
}

function total() {
  // write your code here
  var addition = 0;
var i  = 0;
while (i < cart.length){
  var propN = Object.keys(cart[i]);
  addition = addition + Number(cart[i][propN]);
  i++;
}
  return addition;
}

function removeFromCart(item) {
  // write your code here
var i = 0;
while(i < cart.length){
  var name = Object.keys(cart[i])[0] ; //permet avec la derniere parenthese avec 0 d'avoir uniquement la valeur sans justement les parentheses.
  var properties = cart.hasOwnProperty(name);
  console.log(properties);
  if(name === item){
    cart.splice(i, 1);
  }
  i++;
    }
    console.log('That item is not in your cart.')
    return cart;
  }


function placeOrder(cardNumber) {
  // write your code here
  var a = ""+ cardNumber;

  if (isNaN(cardNumber) == false){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  } else {
console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  return cart.splice(0);
}
