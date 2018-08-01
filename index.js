
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
    sum +=  cart[i].itemPrice
  }
  return sum
}


function removeFromCart(item) {
for (var i = 0;i< cart.length; i++)  {
  if(cart[i].itemName === item) {
   cart.splice(i,1)
   return cart;
   }
} 
  return `That item is not in your cart.`;
}



function placeOrder(cardNumber) {
  if(!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  if(cardNumber) {
    var cost = total(cart.itemPrice)
    cart.length = 0
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}


