
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
  } else if (cart.length === 1) {
      for (var i = 0; i < cart.length; i++) {
      string += `${ cart[i].itemName } at $${ cart[i].itemPrice }.`
    }
  } 
    else {
         for (i = 0;i< cart.length; i++) {
           if (i < cart.length - 1) {
           string += `${ cart[i].itemName } at $${ cart[i].itemPrice }, `  
         }
          else {
            string += `and ${ cart[i].itemName } at $${ cart[i].itemPrice }.`
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
    return `Your total cost is $${ cost }, which will be charged to the card ${ cardNumber }.`
  }
}


