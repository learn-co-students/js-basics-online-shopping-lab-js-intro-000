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
 var itemObj={itemName: `${item}`, itemPrice:Math.floor(Math.random()*100)};

 cart.push(itemObj);
 return `${item} has been added to your cart.`


}

function viewCart() {
  // write your code here
  if (cart.length===0){
    return 'Your shopping cart is empty.'
  }else if (cart.length===1){
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  }else if (cart.length===2){
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
  }else {
    var resultstring='In your cart, you have '
    for (var i=0; i<cart.length-1; i++){
      resultstring+=`${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `

    }
    return resultstring + `and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`
  }
}
var sumTotal
function total() {
  // write your code here
  sumTotal=0
  for (var i=0; i<cart.length; i++){
    sumTotal+=cart[i].itemPrice
  }
  return sumTotal
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++){
    if (item===cart[i].itemName){
      cart.splice(i, 1);
      return cart
    }


  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber==='undefined'){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }else{
    cart.splice(0)
    return `Your total cost is $${sumTotal}, which will be charged to the card ${cardNumber}.`
  }
}
