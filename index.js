var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var price = Math.floor(Math.random() * 100);
 var items = new Object({[item]: price});
  cart.push(items);
  console.log(price);
  console.log(item);
  console.log(items);
  console.log(cart);

  console.log(`${item} has been added to your cart.`) ;
  return cart;
 // write your code here
}

  function viewCart() {
    if (cart.length === 0) {
      return console.log("Your shopping cart is empty.");
    }

    var returnStatement = "In your cart, you have";

    if (cart.length === 1) {
      returnStatement += ` ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
        // returnStatement += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    } else if (cart.length === 2) {
      returnStatement += ` ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
    } else {
      for (var i = 0; i < cart.length; i ++) {
         if (i === (cart.length - 1) ) {
           returnStatement += ` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`;
         } else {
           returnStatement += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`;
         }
      }
    }


    return console.log(returnStatement);
  }

function total() {
  // write your code here
  var total = 0 ;
  for (var i = 0; i < cart.length; i ++) {
    total += parseInt(`${cart[i][Object.keys(cart[i])]}`);
  }
  return total;
}

function removeFromCart(item) {

  var check = ""

     for (var i = 0; i < cart.length; i ++) {
       if (cart[i].hasOwnProperty(item)) {
         cart.splice(i, 1);
         check = true
         return cart;
       } else {
         check = false
       }

       }

     if (check == false ) {
       console.log("That item is not in your cart.");
     }
}

//
//   if (Object.keys(cart[i]) === item ) {
//     console.log('remove item ')
//   } else {
//     console.log('not in cart yet')
//   }
// } else {




function placeOrder(cardNumber) {

  if (cardNumber == null ) {
    return console.log("Sorry, we don't have a credit card on file for you.");
  } else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  }
}
