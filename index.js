var cart = [];

function setCart(newCart) {
  cart = newCart;

}

function getCart(){
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price})

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

   if (!cart.length) {
     return console.log("Your shopping cart is empty.")
   }

  var itemPricesArray = []

  for (let i = 0; i < cart.length; i++) {
     let itemPriceArray = cart[i]
     let item = Object.keys(itemPriceArray)[0]
     let price = itemPriceArray[item]
     itemPricesArray.push(`${item} at \$${price}`)
   }
     console.log(`In your cart, you have ${itemPricesArray.join(', ')}.`)
}


function removeFromCart(item) {
   var itemInCart = false;

   for (var i = 0; i < cart.length; i++) {
     if (cart[i].hasOwnProperty(item)) {
       itemInCart = true;
       cart = cart.slice(0, i).concat(cart.slice(i + 1))
     }
   }
   if (itemInCart == false) {
     console.log("That item is not in your cart.")
   }
 }

 function placeOrder(creditCard) {
   if (!creditCard) {
     console.log("We don't have a credit card on file for you to place your order.");
   } else {
     console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
     setCart([]);
   }
   return cart;
 }







function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
