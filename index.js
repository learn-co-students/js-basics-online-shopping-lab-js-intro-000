var cart = [];

function setCart(newCart) { cart = newCart;}
function getCart() { return cart;}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) { t += cart[i][item]}}
  return t
}


 function addToCart(item) {
   var price = Math.floor(Math.random() * 100);
   var obj = new Object;
   obj = {[item]:price};
   cart.push(obj);
   console.log(item + " has been added to your cart." );
  return cart;
 }
addToCart('socks');
addToCart('puppy');
addToCart('iPhone');


function viewCart(){
  if (cart.length <= 0) {
    console.log("Your shopping cart is empty.")
    return;
  } else
    {
      var string = "In your cart, you have ";
      for (var j = 0; j < cart.length; j++) {
         var temp1 = cart[j]; // {},{},{}
         var arrObjKey = Object.keys(temp1);
          for (var k = 0; k < arrObjKey.length; k++) {
            string +=  `${[arrObjKey[k]]} at $${cart[j][arrObjKey[k]]}, `;
            var str1 = string.slice(0, string.length -2) + ".";
          }
      }
      var str1 = string.slice(0, string.length -2) + ".";
      console.log(str1);
    }
return;
}
viewCart();


function removeFromCart(item) {
  if(cart.length <= 0) {
      console.log("That item is not in your cart."); //ADDED THIS
  } else {　
    var j = 0;

    for ( ; j < cart.length; j++){
      var obj = cart[j]
    for (var name in obj) {
      var price = obj[name];
      if (obj.hasOwnProperty(item)) {
        cart.splice(j, 1);
      }
     }
   }
   if (j === cart.length){ console.log("That item is not in your cart.");}
   return;
  }
 return cart;
}

removeFromCart("iPhone");
removeFromCart("banana");

console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

function placeOrder(cardNumber){
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    return cart.length = 0;
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}

placeOrder(65665);
placeOrder();
