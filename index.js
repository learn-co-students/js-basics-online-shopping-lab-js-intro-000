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
  var itemPrice = Math.ceil(Math.random() * 100);
  var item = {[itemName]: itemPrice};
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart;
}

function viewCart() {

  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
    return
  }

  var cartItems = []

  for(var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])[0];
    var itemPrice = cart[i][item];

    cartItems.push(`${item} at $${itemPrice}`);
  }

  if(cartItems.length === 1){
    console.log("In your cart, you have " + cartItems[0] + ".")
  } else if (cartItems.length === 2) {
    console.log("In your cart, you have " + cartItems.join(" and ") + ".")
  } else {
    console.log("In your cart, you have " + cartItems.slice(0, -1).join(", ") +
     ", and " + cartItems[cartItems.length - 1] + ".")
  }
}

function total() {
  var totalCost = 0
  for( let i in cart){
    var key = Object.keys(cart[i])[0];
    totalCost += cart[i][key]
  }
  return totalCost;
}

function removeFromCart(item) {
  for( let i in cart ){
    var key = Object.keys(cart[i])[0]
    //checking each object to see if key exists
    if(key === item){
      cart.splice(i,1)
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(!cardNumber){ // !false
    console.log("Sorry, we don't have a credit card on file for you.")
    return;
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
    return cart;
}
