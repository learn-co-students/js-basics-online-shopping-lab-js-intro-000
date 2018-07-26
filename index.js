var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * Math.floor(100))
  cart.push({ itemName: item, itemPrice: price })
  {
   return `${ item } has been added to your cart.`
 }
}


function viewCart() {
   var array = []
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else if(cart.length === 1) {
        for (var i = 0; i < cart.length; i++) {
    array.push(`In your cart, you have ${ cart[i].itemName } at $${ cart[i].itemPrice }.`)
    }
  } 
  else if(cart.length === 2) {
         for ( i = 0;i< cart.length; i++) {
    array.push(`In your cart, you have ${ cart[i].itemName } at $${ cart[i].itemPrice }, and ${ cart[i].itemName } at $${ cart[i].itemPrice }.`)
     }
  }
   else if(cart.length === 3) {
         for ( i = 0;i< cart.length; i++) {
    array.push(`In your cart, you have ${ cart[i].itemName } at $${ cart[i].itemPrice }, and ${ cart[i].itemName } at $${ cart[i].itemPrice }, and ${ cart[i].itemName } at $${ cart[i].itemPrice }.`)
     }
  }
  return array
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
