var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100);
var objItemPrice = {[item]: price};
var count = cart.length;
cart[count] = objItemPrice;
console.log (`${item} has been added to your cart.`);
return cart;
 // write your code here
}

function viewCart() {
  if (cart.length >0){
    var youHave = "In your cart, you have"
        for (let i=0; i<cart.length; i++){
          var itemsObj = Object.keys(cart[i]);
          //var stringObj = `${itemsObj[0]} : ${cart[i][itemsObj[0]]}`;
          youHave = `${youHave} ${itemsObj[0]} at $${cart[i][itemsObj[0]]},`;
        }
    console.log (`${youHave.slice(0,-1)}.`);
  }
  else {
        console.log("Your shopping cart is empty.");
  }

}

function total() {
  var total = 0;
  for(let i=0; i<cart.length; i++){
    var itemsObj = Object.keys(cart[i]);
    total = total + cart[i][itemsObj[0]];
  }
  return total;
  // write your code here
}

function removeFromCart(item) {
var flag = 0;
  for (let i=0; i<cart.length; i++){
    var itemsObj = Object.keys(cart[i]);
  //  console.log(itemsObj);
  //  console.log(itemsObj[0]);
    if (itemsObj[0]==item){
      cart.splice(i, 1);
      flag = 1;
    }
  }
  if (flag ==0){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if (cardNumber!=null){
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
else {
  console.log(`We don't have a credit card on file for you to place your order.`);
}
  // "We don't have a credit card on file for you to place your order."`. If there is a credit card on file, the function should print out `
  //"Your total cost is $${total()},
  //which will be charged to the card ${cardNumber}."`. The function should empty the `cart` array.
}
