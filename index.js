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
 cart.push({itemName: item,itemPrice: (Math.floor(Math.random() * 100) + 1) });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart[0] === undefined){
    return 'Your shopping cart is empty.';
  }
  var array1 = [];
  let i = 0;
  while(i < cart.length){
    array1.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    i++;
  }
  if(array1[1] !== undefined){
  array1[array1.length - 1] = 'and '+ array1[array1.length - 1];
}
  let a = array1.join(', ');
  return `In your cart, you have ${a}.`;
}

function total() {
  // write your code here
  let i = 0;
  let a = 0;
  while(i < cart.length){
    a = cart[i].itemPrice + a;
    i++;
  }
  return a;
}

function removeFromCart(item) {
  // write your code here
  let i = 0;
  let array = [];
  while(i < cart.length){
  if(cart[i].itemName === item){
     array.push(cart.splice(i,1));
  }
  i++;
}
if(array[0] === undefined){
return 'That item is not in your cart.';
}
return cart;
}


function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  let a = total();
  cart = [];
  return `Your total cost is $${a}, which will be charged to the card ${cardNumber}.`

  // write your code here
}
