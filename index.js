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
 cart.push({
   itemName:item,
   itemPrice:Math.floor(Math.random()*100)
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length===0){
 return `Your shopping cart is empty.` ;
}
else{
var str = `In your cart, you have `;
if(cart.length===1)
        {
      return `${str}${cart[0].itemName} at $${cart[0].itemPrice}.` ;

        }
   else if(cart.length===2){
      return `${str}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.` ;
                       }
  else{
   return `${str}${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
}
}
}

function total() {
  // write your code here
  var total = 0;
  for(var i=0;i<cart.length;i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i=0;i<cart.length;i++){
    if(cart[i].itemName===item){
      cart.splice(i,1);
      return cart;
    }
  }
  return `That item is not in your cart.`;

}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
   return   `Sorry, we don't have a credit card on file for you.`;
  }
  else{
       var str =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
       cart =[];
}
return str;
}
