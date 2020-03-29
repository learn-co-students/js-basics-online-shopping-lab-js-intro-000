var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(name) {
 // name is equal to value passed
var price = Math.floor(Math.random() * 100 ) + 1;// price is equal to a randomly generated number between 0 & 1 to the 100th power
var item = { itemName: name, itemPrice: price };
cart.push(item);
return name + ` has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
   }
  if (cart.length === 1 ) {
    for (let items in cart) {
      return `In your cart, you have ` +  cart[items].itemName + ` at $` + cart[items].itemPrice +`.`}
    }
  if (cart.length === 2) {
   return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.`}

  if (cart.length > 2) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}, and ${cart[2]["itemName"]} at $${cart[2]["itemPrice"]}.`}
}

function total() {
  var sumTotal = 0;
  for (var i = 0; i < cart.length; i++) {
   var price = cart[i]['itemPrice']
   sumTotal = sumTotal += price
  }
  return sumTotal
}


function removeFromCart(item) {
  for (var n = 0; n < cart.length; n++) {

  var nameOfItem = cart[n]['itemName'];

  if (item == nameOfItem) {
      cart.splice(n,1);
      return cart;}
  }

  if (nameOfItem !== item) {
    return `That item is not in your cart.`
  }
 }


 function placeOrder(cardNumber) {
   if (cardNumber == null) {
     return `Sorry, we don't have a credit card on file for you.`;}
   if (cardNumber !== null){
    var newTotal = total()
        cart = [];
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`;
    //return cart = [];
   }
 }
