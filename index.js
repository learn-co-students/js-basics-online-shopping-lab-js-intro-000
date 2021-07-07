var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random(1) * Math.floor(99))+1 //generate random number from 1 to 100
  let product = {itemName: `${item}`, itemPrice: price } //generate object pair
  cart.push(product); //add object pair to cart
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (!cart.length) {return `Your shopping cart is empty.`};//syntax for 0 items
  if (cart.length===1) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`};//syntax for 1 item
  let list=[];
  var x = cart.length-1;
  for (var i = 0; i < x; i++) {
  list.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)}; //create array of all but last item
  return `In your cart, you have${list}, and ${cart[x].itemName} at $${cart[x].itemPrice}.` //generate response with correct syntax for last item
}

function total() {
  var allPrices = [];//create array of prices only
  for (var i = 0; i < cart.length; i++) {
  allPrices.push(cart[i].itemPrice)};
  return allPrices.reduce(function(a,b){return a+b}, 0);//add each item in the array
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {if (cart[i].itemName === item) {var d = i}}; //find index of item in array
  if (!cart.length) {return `That item is not in your cart.`}; //return canned response if cart is empty
  if (!d) {return `That item is not in your cart.`};//return canned response if item is not in cart
  return cart.splice(d, 1);//remove item from cart and return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {return `Sorry, we don't have a credit card on file for you.`};//check for card value
  var tender = total()//preserve the total
  cart = [];//empty the cart
  return `Your total cost is $${tender}, which will be charged to the card ${cardNumber}.`//provde receipt
}
