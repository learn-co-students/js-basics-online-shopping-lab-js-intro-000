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

 var cartItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}
 cart.push(cartItem);
 return cartItem.itemName + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var view = "In your cart, you have "
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length - 1 && cart.length != 1){
      view = view + "and " + cart[i].itemName + " at " + "$" + cart[i].itemPrice + "."
    }
    else if (cart.length === 1){
      view = view + cart[i].itemName + " at " + "$" + cart[i].itemPrice + "."
    }
    else {
        view = view + cart[i].itemName + " at " + "$" + cart[i].itemPrice + ", "
    }

  }
  return view;
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
    console.log(totalPrice)
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var removed;

  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i].itemName);
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      //console.log(cart[i].itemName);
      removed = true;
    }

  }
  if (removed != true){
    return "That item is not in your cart."
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(isNaN(cardNumber)){
    return "Sorry, we don't have a credit card on file for you."
  }

  var totalInvoice = total();
  cart = []

  return "Your total cost is $" + totalInvoice + ", which will be charged to the card " + cardNumber + ".";
}
