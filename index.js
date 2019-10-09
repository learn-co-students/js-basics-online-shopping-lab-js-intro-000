var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemObject = {};
var price = Math.floor((Math.random() * 100) + 1);
itemObject[item] = price;
cart.push(itemObject);
console.log(`${item} has been added to your cart.`);
return cart;
 // write your code here
}

function viewCart(){
  var arrayPrices = [];
  for(var i = 0; i < cart.length; i++){
  var itemPrice = cart[i];
  var itemKey = Object.keys(itemPrice)[0];
  var price = itemPrice[itemKey];
  arrayPrices.push(`${itemKey} at $${price}`);
  }
  if(cart.length === 1 ){
    console.log(`In your cart, you have ${arrayPrices[0]}.`)

  } else if(cart.length === 2){
    console.log(`In your cart, you have ${arrayPrices.join(' and ')}.`)

  } else if(cart.length >= 3){
    var firstItems = arrayPrices.slice(0, -1).join(', ');
    var lastItem = arrayPrices[arrayPrices.length-1];

    console.log(`In your cart, you have ${firstItems}, and ${lastItem}.`)
  } else {
  console.log("Your shopping cart is empty.")
  }
}

/*function viewCart() {
  if(cart.length === 1){
    var item = cart[0];
    var itemKey = Object.keys(item)[0];
  // key
  console.log(`In your cart, you have ${itemKey} at $${item[itemKey]}.`);

} else if(cart.length === 2){
  var secondItem = cart[1];
  var secondItemKey = Object.keys(secondItem)[0];
      console.log(`In your cart, you have ${itemKey} at $${item[itemKey]} and ${secondItem} at $${secondItem[secondItemKey]}.`);
//    } else if(cart.length >= 3){
//      for(var i = 0; i < cart.length; i++){
//      console.log(`In your cart, you have ${} at $${} and ${} at $${} and ${} at $${}.`);
//}
   } else {
    console.log("Your shopping cart is empty.");
  }
}
*/


function total() {
  var prices = [];
  for(var i = 0; i < cart.length; i++){
    var itemPrice = cart[i];
    var itemKey = Object.keys(itemPrice)[0];
    var price = itemPrice[itemKey];
    prices.push(price);
  }
  var sum = 0;
  for(var i = 0; i < prices.length; i++){
    sum = sum + prices[i];
  }
return sum;

}


function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
     cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
var x = cart.length
  if(cardNumber !== undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);  // write your code here
    cart.splice(0, x)

} else if(cardNumber === undefined){
console.log(`Sorry, we don't have a credit card on file for you.`)
}
}
