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
 var price = Math.floor(Math.random() *  100)
 var itemName = item; // assigns the string 'item' and assigns that to variable itemName
 var name = {};
 name[itemName] = price;
 cart.push(name);
 console.log(`${item} has been added to your cart.`);
 return cart;

}


function viewCart() {
  // write your code here
  var cItems = "";
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
    return
    }
    else{
      for(var i = 0; i < cart.length; i++) {
      var currentKey = Object.keys(cart[i]);
      var toString = currentKey.join();
        if (cart.length === 1) {
          cItems += ` ${currentKey} at $${cart[i][toString]}.`
          break;
        }
        else if (cart.length === 2) {
          if (cart[i] === cart[cart.length - 1]) {
          cItems += ` and ${currentKey} at $${cart[i][toString]}.`
          }
          else {
          cItems += ` ${currentKey} at $${cart[i][toString]}`
          continue;
          }
        }
        else { //means array items is 3 or more
          if (cart[i] === cart[cart.length - 1]) {
          cItems += ` and ${currentKey} at $${cart[i][toString]}.`
          }
          else {
          cItems += ` ${currentKey} at $${cart[i][toString]},`
          }
        }
    } //end of else statement*
  }
  console.log(`In your cart, you have${cItems}`);
}






function total() {
  // write your code here
  var totalCost1 = 0;
  for(var i = 0; i < cart.length ; i++) {
    var currentKey = Object.keys(cart[i]); //gives property of object in given index
    var toString = currentKey.join(); //transforms current key from  array to string
    var itemCost = cart[i][toString];
    totalCost1 += itemCost;
  }
  return totalCost1;
}



function removeFromCart(item) {
   // write your code here
  for (var i = 0; i < cart.length; i ++) {
    var thing = cart[i]
    if (thing.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log( "That item is not in your cart.")
  return cart;
}






function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
    }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    }
  }
