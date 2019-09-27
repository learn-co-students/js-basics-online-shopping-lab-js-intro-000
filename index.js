var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

   let price = Math.floor((Math.random() * 100))
     var itemObj = {itemName: item, itemPrice: price}
      cart.push(itemObj)

 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {return `Your shopping cart is empty.`};
var output = [];
  for (let i = 0; i < cart.length; i++) {
  output.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 1) {
    return `In your cart, you have ${output}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${output[0]}, and ${output[1]}.`
  }
  else if (cart. length >= 3) {
    return `In your cart, you have ${output[0]}, ${output[1]}, and ${output[2]}.`
  }

return output
}



function total() {
 let output = 0
  for(let i = 0; i < cart.length; i++) {
    output +=  cart[i].itemPrice
  }
  return output
}

// function removeFromCart(item) {
//   for (let i = 0; i < cart.length; i++) {
//      if (cart[i].itemName === item){
//       cart.splice(i, 1)
//       return cart
//     }
//   //  return 'That item is not in your cart.'
//   }
// }
function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
   if(cart[i].itemName === item) {
     cart.splice(i, 1)
     return cart
   }
}
return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber) {return `Sorry, we don't have a credit card on file for you.`}

let output = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`

   while(cart.length>0){cart.pop()};

return output
}
