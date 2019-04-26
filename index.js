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
 let itemName = {[item]: itemPrice};
 cart.push(itemName);
 return `${item} has been added to your cart.`;
console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  //let output;
  if(cart.length === 0) {return 'Your shopping cart is empty.'}

let newArr = [];
for(let i = 0; i<cart.length;i++){
  let keys = Object.keys(cart[i][0])
  newArr.push(`${keys} at $${cart[i][keys]}`);
}

let str = "In your cart you have "
if (newArr.length ===1){
  str += newArr +'.';
}
else if (newArr.length ===2){
  str += newArr[0] +' and ' +newArr[1]+'.';
}
if (newArr.length >2){
let last = newArr.pop();
let others = newArr.join(', ')
  str += (others + ', and ' + last +'.');
}
return str;
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
    tot += cart[i][Object.keys(cart[i])]
  }
  return tot;
}

function removeFromCart(item) {
  // write your code here

  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice([i], 1)
      return cart;
    }
  }
  return "That item is not in your cart.";
  return cart;
}
/*
  for(let i = 0; i<cart.length;i++){
    if(Object.keys(cart[i]) ===item){
cart = [...cart.slice(0,i),...cart.slice(i+1)];
return cart;
    }
    }
    */


function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
  }
  }
return "Sorry, we don't have a credit card on file for you.";
  return cart;
}
