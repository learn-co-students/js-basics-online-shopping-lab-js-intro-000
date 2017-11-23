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
}

function viewCart() {
  // write your code here
}
function getCart() {
  return cart;
}
function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return cart;
}
function viewCart() {
   if (cart.length != 0) {
     var newArray = [];
     for (var i = 0, l = cart.length; i < l; i++) {

       var ItemPriceObj = cart[i];
       var item = Object.keys(ItemPriceObj);
       var price = ItemPriceObj[item];
       newArray.push(` ${item} at \$${price}`)

  }
    return console.log(`In your cart, you have${newArray}.`);
   }
   else {
    return console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(itemRemoved) {
  for(var i =0; i < cart.length; i++){
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(itemRemoved)){
        cart.splice(i, i+1);
        return cart;
      }
      else {
        return cart;
      }
    }
  }
  if (cart.length < 1) {
      console.log('That item is not in your cart.');
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function placeOrder(cardNumber) {
  if(arguments.length == 0){
    console.log("We don\'t have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);

  }

}
