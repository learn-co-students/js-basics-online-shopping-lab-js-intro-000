var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var randomPrice = Math.floor(Math.random() * 101);
  var obj = {[item]: randomPrice};
  var newCart = [];

  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  for (var i = 0; i < cart.length; i++) {
    newCart.push(cart[i]);
  }
  return newCart;
}

function viewCart(){
  var result = "In your cart, you have";
  if (cart.length >= 1) {
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i]);
      result += ' ' + key + ' at $' + cart[i][key] + `${i === cart.length-1 ? '.' : ','}`;
    }
  } else {
    console.log("Your shopping cart is empty.");
  }
   console.log(result);
}

function removeFromCart(item){
  var checkCart = cart;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
  if (cart === checkCart) {
    console.log("That item is not in your cart.");
  }
return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function placeOrder(creditCard){
  if (creditCard == undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
  }
  cart = [];
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
