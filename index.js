var cart = [];
var cart_list = {};

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addToCart(item) {
 // write your code here
  cart.push({itemName: item,
             itemPrice: Math.floor(Math.random() * 100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let msg = "";
  debugger;

  switch (cart.length){
    case 0:
      msg = "Your shopping cart is empty.";
      break;
    case 1:
      msg = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      break;
    default:
      for (let i = 0; i < cart.length; i++) {
         if (i === 0){
           msg = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
         } else if ( i === (cart.length - 1) ){
           msg += `, and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
         } else {
           msg += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
         }
      }
      break;
  }
   return msg;
}

function total() {
  // write your code here
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total +=  cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var none = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item ){
      cart.splice(i, 1);
      none = true;
    }
  }
  if (none == false){
    return "That item is not in your cart.";
  }

return cart;
}

function placeOrder(cardNumber = 0) {
  // write your code here
  let msg = ""
  if (cardNumber == 0){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return msg;
  }
}
