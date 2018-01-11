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
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  let cartList = 'In your cart, you have ';
  if(cart.length < 1){
    console.log(`Your shopping cart is empty.`);
  } else {
    for(let i = 0; i < cart.length; i++){

      cartList += `${Object.keys(cart[i])} at $${Object.values(cart[i])}`;
      cartList += `${cart.length === 2 && i !== cart.length -1 ? ' and ' : ''}`;
      cartList += `${i === cart.length - 1 && i !== cart.length -2 ? '.' : ''}`;
      cartList += `${cart.length >= 3 && i !== cart.length -1 ? ', ' : ''}`;
      cartList += `${cart.length > 2 && i === cart.length -2 ? 'and ' : ''}`;

    }
    console.log(cartList);
  }
}

function total() {
  // write your code here
  let basketTotal = [];
  for(let i = 0; i < cart.length; i++){
    basketTotal.push(Number((Object.values(cart[i]))));
  }
  console.log(basketTotal);
 return basketTotal.reduce( function(a,b){
    return Number(a) + Number(b);
  }, 0);
}

function removeFromCart(item) {
  // write your code here

  for(let i = 0; i < cart.length; i++){

    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
    }
  }

 console.log('That item is not in your cart.');
 return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  return cart = [];
}
