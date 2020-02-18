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
 let random = Math.floor(Math.random()* (100-1))+1

 var object = {
   itemName: item,
   itemPrice: random
 }

 cart.push(object)
 return `${cart[cart.length-1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
  {
    return `Your shopping cart is empty.`
  }
  else if(cart.length === 1){
    return `In your cart, you have ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  else if (cart.length > 1)
  {
    var cartItems = [];
    var last = `${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`

    for(var i = 0; i < cart.length - 1; i++)
    {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have ${cartItems.join(', ')}, and ${last}`

  }
  }

function total() {
  // write your code here
  let total = 0;
  for(let i = 0; i < cart.length; i++)
  {
    for(let item in cart[i]){
      total += cart[i][item]
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(itemName)) {
     return cart.splice(i, 1);
   }
 }

 return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
   return console.log("We don't have a credit card on file for you to place your order.")
 }
else
 console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`)

}
