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

 return `${item} has been added to your cart.`
}

addToCart('Apple')


function viewCart() {
  // write your code here
  if (getCart().length===0){
    var message=`Your shopping cart is empty`
  }
  else{
    var message=`In your cart, you have `
    for (var i=0;i<getCart().length;i++){
      if (i===0){
      message=message+ `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
      }
      else if (i===getCart().length-1) {
        message=message+ `, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
      }
      else{
        message=message+ `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
      }
    }
  }
  message=message+`.`
  return message
}

function total() {
  // write your code here
  for (var i=0;i<getCart().length;i++){
    var total =total+ getCart()[i].itemPrice

  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
