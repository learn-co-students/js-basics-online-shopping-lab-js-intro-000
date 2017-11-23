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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var tempObj = new Object();
  tempObj[item] = price;
  cart.push(tempObj);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else{
    var ret = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++){
      var pair = cart[i];
      var item = Object.keys(pair)[0];
      var price = pair[item];
      if (i === cart.length-1){
        ret += item + " at $" + price + "."
      }
      else{
        ret += item + " at $" + price + ", ";
      }
    }
    console.log(ret);
  }
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1) ;
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(num){
  if (num == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + num + ".");
  }
  cart.length = 0;
}
