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
 //let shoppingCart = {};
 //itemName = item;

 let itemPrice = Math.floor(Math.random()*100);
 let itemName = {itemName: item, itemPrice: itemPrice};
 cart.push(itemName);
 return `${item} has been added to your cart.`;
console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  //let output;
if(cart.length === 0) {return 'Your shopping cart is empty.'}
if(cart.length === 1) {return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.` }
if(cart.length === 2) {return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.` }
if(cart.length === 3) {return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.` }

}



 /*
  else{
    for(var i = 0; i < cart.length ; i++){
  if (i === 0){
  output = `In your cart, you have ${itemName} at ${itemPrice}.`
  }else{
  output = `${output}`
  }
} */



function total() {
  // write your code here
  let tot = 0;
  for(let i = 0; i<cart.length;i++){
    tot += getCart()[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i<cart.length;i++){
    if(cart[i].itemName === item){
cart = [...cart.slice(0,i),...cart.slice(i+1)];
return cart;
    }
    }
  return "That item is not in your cart.";
  return cart;
}
/*

    */


function placeOrder(cardNumber) {
  // write your code here
  let output;
  if (cardNumber){
  output = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    for (var i = cart.length; i= 0; i--) {
      cart.pop();
  }
} else {
output = "Sorry, we don't have a credit card on file for you.";
}
cart = [];
cart.length = 0;
return output;
  return cart;

}
