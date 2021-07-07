var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  var list = [];
  for ( var i = 0; i < cart.length; i++) {
      list.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else{
    var last = list.pop();
    return `In your cart, you have ${list.join(', ')}, and ${last}.`
  }
}

function total() {
  var grandTotal = 0;
  for (let i = 0; i < cart.length; i++){
    grandTotal += cart[i].itemPrice;
  }
  return grandTotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber){
  let grandTotal = total();
  cart =[];
  return`Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`;
} else {
  return "Sorry, we don't have a credit card on file for you.";
}
}
