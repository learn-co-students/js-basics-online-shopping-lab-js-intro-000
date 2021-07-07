var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
var k_cart = {};
var value = Math.floor((Math.random() * 100) + 1);
k_cart[item] = value;
cart.push(k_cart);
console.log(`${item} has been added to your cart.`);
return cart;

}


function viewCart() {
var arraylenght = cart.length;
if (arraylenght == 0 ){
  console.log("Your shopping cart is empty.");
}

else{
var itemsAndprices = [];
for (var i = 0 ; i < arraylenght ; i++)
{
// copy the cart array than split the key and value form the keyvaluepair than
// push them to a new array of strings.
var temp = cart[i];
var arraykey= Object.keys(temp)[0];
var arrayvalue = temp[arraykey];
itemsAndprices.push(` ${arraykey} at \$${arrayvalue}`);

if (arraylenght ==1){

  console.log(`In your cart, you have ${arraykey} at \$${arrayvalue}.`);
}
if (arraylenght == 2)

console.log(`In your cart, you have${itemsAndprices[0]} and${itemsAndprices[1]}.`);
}
 // use the slice method to get all variable inside the array expept the last element
 // note to self : when accessing element in array , remeber they start at 0!!!!
if (arraylenght >= 3){
  var Multi_Items = itemsAndprices.slice(0,arraylenght-1);
console.log(`In your cart, you have${Multi_Items}, and${itemsAndprices[arraylenght-1]}.`);
}

}





}
function total() {

  // alot of fancy footwork to get this done ... got to find a easier way in the future

var totals= 0;
var priceArray = [];

for (var i = 0 ; i < cart.length; i++)
{
  // because cart is and array that house key value pairs , I have to split the
  // keys from the values, than load the values into and seperate array . than do
  // adition
  var temp = cart[i];
  var arraykey= Object.keys(temp)[0];
  var arrayvalue = temp[arraykey];
  priceArray.push(arrayvalue);

totals +=priceArray[i];
}
return totals;
}


function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber)
{

    if (cardNumber== null)
    {
    console.log("Sorry, we don't have a credit card on file for you.");
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    }

    cart = []; // empty cart.
}
