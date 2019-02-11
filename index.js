var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)};
cart.push(obj);
return `${item} has been added to your cart.`
}

function viewCart() {
  var str = "";
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } else if (cart.length ===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else{
    for (let i = 0; i < cart.length; i++){
      if (i === cart.length-1){
        str = str + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`}
        else {
          str = str + `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
      return `In your cart, you have ${str}`
    }
 }


function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
    sum = sum + cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName == item){
      return cart.splice(i,1)
    }}
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return `Sorry, we don\'t have a credit card on file for you.`
  } else{
    const sum = total();
    cart.length = 0;
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
}
