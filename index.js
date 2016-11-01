var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.random();
  price *= 100;
  price = Math.floor(price);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var stringArray = [];
  if(cart.length > 0){
		var intro = "In your cart, you have"
		for (var i = 0; i < cart.length; i++) {
			for (var item in cart[i]) {
   			var t = cart[i][item];
  			var x = Object.keys(cart[i]).toString();
  			stringArray.push(` ${x} at $${t}`);
  		}
		}
		console.log(`${intro}${stringArray}.`);
	}else{console.log(`Your shopping cart is empty.`);}
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

function removeFromCart(item){
  var x = false;
  for (var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      x = true;
      return cart;
    }
  }
  if(x === false){
    console.log(`That item is not in your cart.`);
  }
}

function placeOrder(cc){
  if(!cc){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  if(cc > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  }
}

/*
Define a function placeOrder which accepts one argument, a credit card number.
If no argument is received, then the function should print out
"We don't have a credit card on file for you to place your order.".
If there is a credit card on file, the function should print out
"Your total cost is $${total()}, which will be charged to the card ${cardNumber}.".
The function should empty the cart array.
*/
