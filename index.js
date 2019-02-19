var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
  cart.push({itemName: item, itemPrice: price(1,100)})
  return item + " has been added to your cart."
}


// Originally tried to use a for loop as a counter but couldnt get it to work or record each individual item, it was either all or nothing
    //  for(var i = 0; i < cart.length; ++i) {
    //  var getItem = cart[i].itemName;
    //  var getPrice = cart[i].itemPrice
// Then i used hard coded place holders for the object/array location
//  this created alot of declared variables.  tried making the var global but there was an error
/*
function viewCart() {

      if (cart.length === 1) {
        var i = 0
        var getItem = cart[i].itemName
        var getPrice = cart[i].itemPrice
        return "In your cart, you have " + getItem + " at $" + getPrice + "."
        }
      if (cart.length === 2) {
        var getItem = cart[0].itemName
        var getPrice = cart[0].itemPrice
        var getItem2 = cart[1].itemName
        var getPrice2 = cart[1].itemPrice
        return "In your cart, you have " + getItem + " at $" + getPrice + ", and " + getItem2 + " at $" +getPrice2 + "."
        }
      if (cart.length === 3) {
        var getItem = cart[0].itemName
        var getPrice = cart[0].itemPrice
        var getItem2 = cart[1].itemName
        var getPrice2 = cart[1].itemPrice
        var getItem3 = cart[2].itemName
        var getPrice3 = cart[2].itemPrice
        return "In your cart, you have " + getItem + " at $" + getPrice + ", " + getItem2 + " at $" +getPrice2 + ", and " + getItem3 + " at $" +getPrice3 + "."
          }
      if (cart.length === 0) {
        return "Your shopping cart is empty."
          }
    }
*/







// setteled on using templet literals
function viewCart() {

  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      }
  if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      }
  if (cart.length === 3) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }
  if (cart.length === 0) {
    return "Your shopping cart is empty."
      }
}



// I think I can just hardcode the object spaces like above, but wouldnt be done 'right'
// how can I return the length of the array? and dynmanically change the return?
function total() {
  if (cart.length === 1) {
    return cart[0].itemPrice
      }
  if (cart.length === 2) {
    return cart[0].itemPrice + cart[1].itemPrice
      }
  if (cart.length === 3) {
    return cart[0].itemPrice + cart[1].itemPrice + cart[2].itemPrice
      }
  if (cart.length === 0) {
    return 0
      }
}

// Stuck on this one.  When the else statement is removed the if statement clear the test.
// When I add the else statment both tests fail
// trying to see if else or != would be better to solve
// using alert/consolelog instead of return doesnt break it with the else statement
// changed the else to esle if and added a false declaration.  the remove item tests passes but not the error
// Got help and needed to remove the else and place the return at the end of the function

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
    }
  }
  return `That item is not in your cart.`
}

// I used NaN to test if the card is actual numbers first.  IF true spit out that message
// First I Set the var totalPrice so the value of the current cart was stored.  once the else hits
// the cart variable is cleard first and the message is triggerd referencing the stored total value
// another way to do this would be to copy the array with all pricing values into a new arry, add it then clear cart

function placeOrder(cardNumber) {
  var totalPrice = total()
  if (isNaN(cardNumber)) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
