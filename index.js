var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var addedItem = { itemName: item, itemPrice: Math.floor(Math.random()*100) };
 cart.push(addedItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  const itemAndPrice = [];
 if (!cart.length){
   return 'Your shopping cart is empty.';
} else if (cart.length === 1) {
  
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  
} else if (cart.length === 2){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
} else

{ for (var i = 0; i < cart.length - 1; i++){
 
  itemAndPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  
}
  return `In your cart, you have ${itemAndPrice.join(', ')}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
}}

function total() {
  var tally = 0;
 for (var i = 0; i < cart.length; i++){
 
  tally = tally + cart[i].itemPrice;
}
  return tally;
  
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++){
 
  if (cart[i].itemName===item) { 
    cart.splice(i, 1);
    return cart;
     }
    }return "That item is not in your cart.";}

function placeOrder(cardNumber) {
 if (cardNumber===undefined){ 
   return "Sorry, we don't have a credit card on file for you.";
} else{ var newTotal = total();
  cart =[];
  return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`;

}}