var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var obj = {itemName: item, itemPrice: price};
  cart.push(obj);
  return `${item} has been added to your cart.`
 // write your code here
}

function viewCart() {
  if(!cart.length){
    return "Your shopping cart is empty."
  }
  var l = cart.length;
  //var k = []
  //switch(l){
    //case 1: return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
    //case 2: return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.`
    //}

    //for (let i = 1; i < cart.length - 1; i++){
      //    k.unshift(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`)
  //  }
    // return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, ${k} and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.`
   var firstPart = `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}`
   //var middlePart = `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`
   var lastPart = `and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.`
   var moreItems = []
   if (l == 1){
     return `${firstPart}.`
   }
   else if (l == 2){
     return  `${firstPart}, ${lastPart}`
   }
   else {for (let i = 1; i < cart.length - 1; i++){
     moreItems.unshift(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`)
   }
   return `${firstPart}, ${moreItems} ${lastPart}`
   }



  }
  // write your code here


function total() {
  var currentTotalValue = 0;
  for(let i = 0; i < cart.length; i++){
    currentTotalValue += cart[i]["itemPrice"];
  }
return currentTotalValue;
  // write your code here
}

function removeFromCart(item) {
var w = 0;
   for (var i = 0; i < cart.length; i++)
     if(cart[i]["itemName"] === item){
       cart.splice(i, 1);
       w++;
       }
     if(w == 0) {return "That item is not in your cart.";
  }}
  // write your code here


function placeOrder(cardNumber) {
let v = cardNumber;
  if(!v){
    return "Sorry, we don\'t have a credit card on file for you." }
var t = total()
cart.splice(0)
return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`

}
