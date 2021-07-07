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
 var newItem = new Object({itemName: item, itemPrice: Math.floor(10 * Math.random())})
 cart.push(newItem)
 return `${newItem["itemName"]} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var msg = "In your cart, you have"
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1){
    msg = msg + ` ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
    return msg
  }
  else{
      for (var i = 0; i < cart.length; i++){
        if (i<cart.length-1){
          msg = msg + ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`
    }   else{
          msg = msg + ` and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`
    }
    }
    return msg.slice(0,msg.length-1)+"."
  }
}


function total() {
  // write your code here
  total = 0
  for ( var i = 0; i < cart.length; i++){
    total = total+cart[i]["itemPrice"]
  }
  return total
}

function removeFromCart(item) {
  var inCart = false
  for (var i = 0; i<cart.length; i++){
    if (cart[i]["itemName"]===item){
      inCart = true
      cart.splice(i,1)
    }
  }
  if(inCart == true){
    return cart
  }else{
    return "That item is not in your cart."
  }
}



function placeOrder(cardNumber) {
  // write your code here
function total(){
  total = 0
  for ( var i = 0; i < cart.length; i++){
    total = total+cart[i]["itemPrice"]
  }
  return total
}
var cost = total()

if (typeof(cardNumber) === "undefined"){
  return "Sorry, we don't have a credit card on file for you."
}else{
  cart = []
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
}
