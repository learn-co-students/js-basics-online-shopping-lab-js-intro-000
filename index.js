var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var addedItem = {};
addedItem.itemName = item;
addedItem.itemPrice = Math.floor(Math.random()*100) + 1;
cart.push(addedItem);
return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var myCart = [];
  for (let i = 0; i < cart.length; i++) {
    var myItems = `${cart[i].itemName} at $${cart[i].itemPrice}`;
    myCart.push(myItems);
  }
  var myString = "In your cart, you have ";
    if (myCart.length === 1) {
    myString = `${myString}${myCart}.`;
  } else if (myCart.length === 2) {
    myString += (myCart[0] + ", and " + myCart[1] + ".");
  } else if (myCart.length > 2){
    var lastItem = myCart.pop();
    var otherItems = myCart.join(", ");
    myString += (otherItems + ", and " + lastItem + ".");
  }
  return myString;
}
}

function total() {
  // write your code here
  var sum = 0;
 for (let i = 0; i < cart.length; i++) {
   var keys = Object.keys(cart[i]);
   var itemPrice = keys[1];
   sum += parseInt(cart[i][itemPrice]);
 }
 return sum;
}


function removeFromCart(item) {
 for (let i = 0; i < cart.length; i++) {
var keys = Object.keys(cart[i]);
    if(cart[i][keys[0]] === item) {
      cart.splice(i, 1);
      return cart;
    }
}
return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  // First of all, calculate the total before we empty the cart!
  var myTotal = total();
  total();
  if(cardNumber) {
    cart =[];
    return `Your total cost is $${myTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
