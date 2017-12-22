var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 let item = {};
 item[itemName] = Math.floor(Math.random() * 100)
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`)
 return  cart;
}

function viewCart() {
  // write your code here
  let cartDis = ['In your cart']
  if(cart.length === 0){
  console.log('Your shopping cart is empty.');
  }
  else if(cart.length === 1){
    cartDis.push(`you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}`)
    console.log(`${cartDis.join(', ')}.`);
  }
  else{

    for(let i = 0; i < cart.length; i++){

      cartDis.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }

    if(cart.length > 2){

      console.log(`${cartDis[0]}, you have ${cartDis.slice(1,cartDis.length - 1).join(', ')}, and ${cartDis.slice(-1)}.`);

    }
    else {

      console.log(`${cartDis[0]}, you have ${cartDis.slice(1).join(' and ')}.`);

    }
  }
}

function total() {
  // write your code here
  return cart.reduce(function(a,n){
    return a + Number(Object.values(n));
  },0)
}

function removeFromCart(item) {
  // write your code here
  let found = cart.filter(function(e){
    return e.hasOwnProperty(item) === true;
  })
  if(found.length === 0){
    console.log('That item is not in your cart.')
  }
  else {
    for(let i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
        cart.splice(i,1)
      }
  }
}
}
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  else{
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
