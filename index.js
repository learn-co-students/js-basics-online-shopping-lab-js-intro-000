var cart = [];

function addToCart(item){
  var object = {};
  var price = 4
  object[item] = price
  cart.push(object);
  console.log(item + " has been added to your cart.");
  return cart;
}


function viewCart(){
  var string = "In your cart, you have"
  if (cart.length > 0){
    for (var i = 0; i <cart.length; i++){
      for (var item in cart[i]){
        string = string + ` ${item} at \$${cart[i][item]},`;
      }
    }
    string = string.slice(0,string.length-1);
    string = string + ".";
    console.log(string)
    }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function total(){
  
}

function removeFromCart(item){
  for (var i = 0; i<cart.length; i++){
    if (Object.keys(cart[i]) == item){
  cart.splice(i,1);
  return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function getCart(){
  return cart;
}

function placeOrder(cc){
  if (cc > 0){
    var string = 'Your total cost is $' + total() + ', which will be charged to the card ' + cc +'.'
    console.log(string);
  }
  else{
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  cart = [];
}

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
