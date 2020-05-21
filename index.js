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
  var price = Math.floor(Math.random() * 101)

  var itemObj = {
    "itemName": item,
    "itemPrice": price
  };
  itemObj[item] = price
  cart.push(itemObj)
  return `${item} has been added to your cart.`
  return cart
}

function viewCart() {
      if (cart.length === 0) {
        return "Your shopping cart is empty."
      } else if (cart.length === 1) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      } else if (cart.length === 2) {
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      } else {
        var myStr = "In your cart, you have "
        for(var i = 0; i < cart.length - 1; i++) {
          myStr = myStr + `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
        return myStr + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
      }
    }

function total() {
  // write your code here
  let sum = 0;
for( let i = 0; i < cart.length;i++){
sum +=  cart[i].itemPrice;
}
return sum;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
   if (item === cart[i].itemName){
   cart.splice(i, 1);
   return cart;
   }
 }
 if (item !== cart[item]){
   return "That item is not in your cart."
 }
}

function placeOrder(cardNumber) {
  // write your code here
  let sum = total();
  if(typeof cardNumber  !== "number"){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    cart =[];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
