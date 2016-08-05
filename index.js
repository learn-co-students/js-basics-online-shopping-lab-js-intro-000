var cart = [];

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

function addToCart(item){
  var itemPrice = Math.floor((Math.random()*100)+1);
  cart.push({[item]:itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var result = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++){
      for (var items in cart[i]){
        result.push(items +" at " + cart[i][items]);
      }
    }
    console.log("In your cart, you have " + result.join(", ") + ".")
  }
}

function removeFromCart(item){
	for (var i = 0, l = cart.length; i < l; i++){
	  for (var items in cart[i]){
	  	if (items === item){
	  		cart.splice(i,1);
        return cart;
	  	}
	  }
	}
	if (l === cart.length) {
		console.log('That item is not in your cart.');
	}
}

function placeOrder(cardnumber) {
  if (cardnumber == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardnumber}.`);
    cart = [];
  }
}
