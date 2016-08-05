var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let total = 0

  for (var i = 0, i < cart.length; i++) {
    for (var item in cart[i]) {
      total += cart[i][item]
    }
  }
  return total
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
        result.push(items +" at $" + cart[i][items]);
      }
    }
    console.log("In your cart, you have " + result.join(", ") + ".")
  }

}

function removeFromCart(item){
  var i;
	for (i = 0; i < cart.length; i++){
	  for (var items in cart[i]){
	  	if (items === item){
	  		cart.splice(i,1);
        return cart;
	  	}
	  }
	}
	console.log('That item is not in your cart.');
}

function placeOrder(cardnumber) {
  if (cardnumber == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardnumber}.`);
    cart = [];
  }
}
