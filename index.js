
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
   var string = 'In your cart, you have '
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else if(cart.length === 1) {
        for (var i = 0; i < cart.length; i++) {
    string += `${ cart[i].itemName } at $${ cart[i].itemPrice }.`
    }
  } 
  else if(cart.length === 2) {
         for ( i = 0;i< cart.length; i++) {
    string += `${ cart[i].itemName } at $${ cart[i].itemPrice }`
      
      if(i === 0){
        string += `, and `
      }
      if(i === 1){
        string += `.`
      }
      
     }
  }
   else if(cart.length === 3) {
         for ( i = 0;i< cart.length; i++) {
    string += `${ cart[i].itemName } at $${ cart[i].itemPrice }`
      
      if(i === 0) {
        string += `, `
      }
      if(i === 1) {
        string += `, and `
      }
      if(i === 2) {
        string += `.`
      }
     }
     
  }
  return string 
} 


function total() {
  var sum = 0
  for (var i = 0;i< cart.length; i++) {
    sum = sum +  cart[i].itemPrice
  }
  return sum
}


function removeFromCart(remItem) {
if(cart.includes(remItem)) {
for(i = 0; i < cart.length ; i++){
  cart.indexOf(remItem))
  //Object.keys(cart)

 cart.splice(,1)
}
}
}


function placeOrder(cardNumber) {
  // write your code here
}