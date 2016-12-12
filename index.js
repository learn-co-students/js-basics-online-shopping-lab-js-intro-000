var cart = [];
cart.length=0
function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}
function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart() {
var intro = "In your cart, you have "
if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
else{
var addOn = '';
    for(var i = 0; i < cart.length; i++){
      let items = Object.keys(cart[i]);
      let prices = cart[i][items];
      var addOn = `${addOn}${items} at $${prices}${i===cart.length-1 ? '.' : ', '}`;
    }
  console.log(`${intro}${addOn}`)
  }
}
function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){ //Search the array of objects
    if(cart[i].hasOwnProperty([item])){
      /*This code never runs if the item isn't found*/
      cart.splice(i,1); //Remove the item
      return cart;
    }
    else if(i===cart.length-1){
      console.log("That item is not in your cart.")
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}
function placeOrder(ccn) {
  if(ccn===undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccn}.`);
    cart.splice(0,cart.length);
  }
  return cart;
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
