var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*101)
  var object = {itemName: item, itemPrice: price}
  cart.push(object)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length ===0){
    return "Your shopping cart is empty."
  }//if 
   else if (cart.length ===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
   } //else if 
   else if (cart.length ===2){
     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } //else if
    else {
      var output = "In your cart, you have "
      for (let i =0; i< cart.length -1; i++){
        output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `
      } //for 
      return output + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    } //else
}

function total() {
  var total = 0;
  for (let i= 0; i< cart.length; i++){
    total += cart[i].itemPrice
  }
  return total;
}

function removeFromCart(item) {
 for (let i =0; i< cart.length; i++){
   if (item === cart[i].itemName){
     cart.splice(i,1);
     return cart;
   }//if 
 } //for
    if (item !=cart[item]){
     return "That item is not in your cart."
   }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "undefined"){
    return "Sorry, we don't have a credit card on file for you."
  }//if
   else {
    var cartTotal = total();
    cart=[];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  return cart
  }
}

