var cart;

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart;
}

function addToCart(item) {

 var price = Math.floor(Math.random() * 100);
 var newObj = {};
 newObj[item] = price;
 cart.push(newObj)
 console.log(`${item} has been added to your cart.`);
 return getCart();
}

function viewCart(){
  var newArray = [];

  if(cart.length !== 0) {

    for(var i = 0; i !== cart.length; i++) {

    var a = Object.keys(cart[i]);
    var price = cart[i][a];
    newArray.push(` ${a} at $${price}`)
    }
    var z = `In your cart, you have ${newArray}.`
    console.log(z.replace(/\s\s+/g, ' '));
    return;
}
  console.log("Your shopping cart is empty.");
  return;
}

function removeFromCart(item) {

  for(var i = 0; i !== getCart().length; i++) {

    if(getCart()[i].hasOwnProperty(item)) {
       getCart().splice(i,1)
       return getCart()
    }
}
 console.log('That item is not in your cart.');
 return;
}

function placeOrder(cardNumber){
  if(typeof cardNumber === 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.splice(0, cart.length);
  return;
}
