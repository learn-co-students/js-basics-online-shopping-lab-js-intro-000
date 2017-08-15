var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  //var item = new Object({itemName: itemPrice});
   var item = {};
   item[itemName] = itemPrice
   cart.push(item);
   console.log(`${itemName} has been added to your cart.`)
 return cart
}


function viewCart () {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var newArr = [];
     for (var i = 0; i < cart.length; i++) {
       for (var price in cart[i]) {
         if ((i != cart.length -1) || (cart.length === 1)) {
           newArr.push(`${price} at $${cart[i][price]}`)
         }
         else {
           newArr.push(`and ${price} at $${cart[i][price]}`)
         }
       }
     }
     if (cart.length === 2) {
       console.log("In your cart, you have " + newArr.join(" ") + ".");
     }
     else {
       console.log("In your cart, you have " + newArr.join(", ") + ".");
     }
    //  else {
    //
    //  }
 }
 }

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    for(var price in cart[i]) {
      totalPrice += cart[i][price]
    }
  }
  return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
  }
  return console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
