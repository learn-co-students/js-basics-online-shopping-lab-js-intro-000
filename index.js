var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {[item]: Math.floor(Math.random() *100)};
  cart.push(newItem);
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let list =[];

  for (let i = 0; i < cart.length; i++){
    list.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`);
  }
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1){
  console.log(`In your cart, you have ${list}.`);
} else if (cart.length === 2){
  console.log(`In your cart, you have ${list.join(' and ')}.`);
}
else if (cart.length >= 3){
  console.log (`In your cart, you have ${list.slice(0, -1).join(', ') + ', and ' + list.slice(-1)}.`);
}
}



function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  if (cart.length > 0){

  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
        cart.splice(i, 1);
      return cart;
    }
  }
}
 else {
  console.log(`That item is not in your cart.`);
}
}

function placeOrder(cardNumber) {
 if (cardNumber === undefined) {
    return console.log(`Sorry, we don't have a credit card on file for you.`)
   } else {
     var totalCost = total();
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
     cart = []
   return cart
 }
 }
 
