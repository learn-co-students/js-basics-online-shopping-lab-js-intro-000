var cart = [];

function getCart(item) {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = (Math.floor(Math.random() * 100))
  var itemVar = {itemName: item, itemPrice: price};
  console.log(itemVar)
  cart.push(itemVar)
  return `${itemVar.itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length > 0){
    var message = 'In your cart, '
    for(var i = 0; i<cart.length; i++){
      if(i === 0){
        message += `you have ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if(i == (cart.length-1)&&(cart.length>1)){
        message += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else{
        message += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    message += '.'
  }
  else{
    message = 'Your shopping cart is empty.'
  }
  return message
 }
 
 
 function total(){
   var totalPrice = 0;
   for(var i = 0; i<cart.length; i++){
     var itemPrice = Number(cart[i].itemPrice)
     totalPrice = itemPrice + totalPrice
   }
   return totalPrice;
 }
 
  function removeFromCart(item){
   var found = false
   for(var i = 0; i<cart.length; i++){
     if(item == cart[i].itemName){
       cart.splice(i, 1);
       found = true
     }
   }
   if(found===false){
     return 'That item is not in your cart.'
    }
    else{
      return cart;
    }
  }
  
  function placeOrder(ccNumber){
    if(ccNumber){
      var totalPrice = total()
      cart = [];
      var message = `Your total cost is $${totalPrice}, which will be charged to the card ${ccNumber}.` 
      return message;
    }
    else{
      return "Sorry, we don't have a credit card on file for you." 
    }
  }