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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}



function addToCart(item){
  let price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function getCart(){
  return cart;
}

function viewCart(){
  if(!cart.length){
    return console.log('Your shopping cart is empty.');
  }

  var itemAndPrices = [];

  cart.forEach(function(obj){
    let itemAndPrice = obj;
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemAndPrices.push(`${item} at \$${price}`);
  });

  console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`)
}

function removeFromCart(item){
  let itemInCart = false;

  cart.forEach(function(obj, i){
    if(obj.hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i+1))
    }
  })

  if(!itemInCart){
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber){
  if(!cardNumber){
    return console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
