var cart = [];
//var itemObj=[ { itemName:"bananas", itemPrice: 17 }]

function getCart() {
  //cart=itemObj;
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var itemObj={itemName:item, itemPrice:Math.floor((Math.random() * 100) + 1)}
 getCart().push(itemObj)
}

addToCart('Apple')


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
