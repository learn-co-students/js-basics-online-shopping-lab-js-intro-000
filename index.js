var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var thing = {
  itemName: item,
  itemPrice: Math.random()*100
}
cart.push(thing);
return item + " has been added to your cart.";
}

function viewCart() {
  if (getCart().length < 1){
  return "Your shopping cart is empty."
} else if (getCart().length == 1) {
  return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + "."

} else if (getCart().length == 2) {
  return "In your cart, you have " + getCart()[0].itemName + " at $" + getCart()[0].itemPrice + ", and " + getCart()[1].itemName + " at $" + getCart()[1].itemPrice + "."

} else {
  return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", " + cart[1].itemName + " at $" + cart[1].itemPrice + "," + " and " + cart[2].itemName + " at $" + cart[2].itemPrice + "."
}
}


function total() {
  var  price = 0;
  for (var i = 0; i < getCart().length; i++) {
    price = price + getCart()[i].itemPrice;
  }
   return price
}

function removeFromCart(item) {
  var num = 0;
  for (var i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName == item) {
    getCart().splice(i,1);
    num = 1;
    }

  }
  if (num == 1) {
    getCart().splice(i,1)
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalP = total();
    cart = [];
    return "Your total cost is $" + totalP + ", which will be charged to the card " + cardNumber + "."

}
}
