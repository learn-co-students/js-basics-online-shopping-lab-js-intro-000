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
 let itemObj = {};
 itemObj.itemName = item;
 itemObj.itemPrice = Math.floor(Math.random() * 10) + 1;
 cart.push(itemObj);

 return `${itemObj.itemName} has been added to your cart.`;

}

function viewCart() {//credit to arellaEG because the learn IDE lost my code on this TWICE!
  if (cart.length===0){
    str= 'Your shopping cart is empty.'
  }
  else {
    var str=`In your cart, you have `;
    if (cart.length===1){
       str=str + `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`}
     else {
       for (var i=0; i<cart.length-1; i++){
      str+= `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `}
    str+=`and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
  }}
  return str;
}

function total() {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var counter = 0;
    if (item === cart[i].itemName)
    {
      cart.splice(i,1);
      counter++;
    }
  }

  if (counter > 0){
    return cart;
  }
  else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber === "undefined") {
    return "Sorry we don't have a credit card on file for you.";
  }
  else {
    let total = total();

    cart = [];

    let message = `Your total cost is ${total}, which will be charged to the card ${cardNumber}.`;
    return message;
  }
}
