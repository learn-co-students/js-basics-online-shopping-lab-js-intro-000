var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var newitem = { itemName : `${item}`, itemPrice : Math.floor(Math.random()*100) }
    cart[cart.length] = newitem
   return (`${item} has been added to your cart.`);

  }


function viewCart() {
var tempcart = []
var answer = []
var l = cart.length
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }
  else {for (let i = 0, l = cart.length-1; i < l; i++){
      tempcart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
      //answer = `In your cart, you have ${tempcart.join(', ')}`
      tempcart.push(`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
      return (`In your cart, you have ${tempcart.join(', ')}`)


    //return(`${answer}`+`, and ${cart[cart.length].itemName} at $${cart[cart.length].itemPrice}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
