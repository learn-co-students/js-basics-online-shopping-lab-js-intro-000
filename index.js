var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 
 var item = {};
 var itemCost;
 
 itemCost = Math.floor((Math.random() * 100) + 1); // 1 <=  n >= 100
 
 item[itemName] = itemCost;
 console.log("in addToCart(), item is ", item);
 
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}


function viewCart() {
  // write your code here
  
  // NOTE: console.log() did not work when spy() was active
  
  // Need to refactor this :)
  
  //var itemList = Object.keys(cart); // get array of item names in cart
  var itemNo; // index into Cart to access "item"
  var itemKey; // the current item key from object in cart array
  var retStr; // the string to construct that should be printed
  
 // console.log("entering viewCart, getCart().length is " + getCart().length);
  
  if (getCart().length === 0) {
    retStr = "Your shopping cart is empty.";
  } else if (getCart().length === 1) {
    
    //console.log("in one item branch");
    //console.log("The item is " + Object.keys(getCart()[0])[0]);
    
    // only one item in cart array so we know the indexes are "0"
    retStr = `In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`;
  } else if (getCart().length === 2) {
    //console.log("in two item branch");
    retStr = `In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}`;
    retStr = retStr + ` and ${Object.keys(getCart()[1])[0]} at $${getCart()[1][Object.keys(getCart()[1])[0]]}.`;
  } else {
    //console.log("in >2 items branch");
    //console.log(getCart());
    retStr = `In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}`; // first item
    for (var i = 1; i < getCart().length - 1; i++) { // start at 2nd item and end at 2nd to last item (have to add "and before last item")
      // console.log("in for loop: i is ", i);
      retStr = `${retStr}, ${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]}`;
    }
    // now, add the last item to the end, with a period
   retStr = `${retStr}, and ${Object.keys(getCart()[getCart().length -1 ])[0]} at $${getCart()[getCart().length - 1][Object.keys(getCart()[i])[0]]}.`;
   // now, add the period to the end of the sentence
   // retStr = retStr + "."
}
console.log(retStr);
}

function total() {
  // write your code here
  var totalCost = 0;
  
  //console.log("\nin total()");
  
  for (var i = 0; i < getCart().length; i++) {
    //console.log("in total() for loop: ",
      //"i is ", i, 
      //", and cost is ", Object.values(getCart()[i])[0]);
    totalCost += Object.values(getCart()[i])[0]; // only one value in each object
  }
  //console.log("in total, returning ", totalCost);
  return totalCost;
}

function removeFromCart(itemName) {
  var cart = getCart(); // func provided, so use it to access global "cart"

  if (cart.length !== 0) { // cart has items
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(itemName) === true) {
        cart.splice(i, 1); //throw away return value (deleted array entry)
      }
    }
  } else { // nothing in the cart;
    console.log("That item is not in your cart.");
  }
  
  return cart;
}

function placeOrder(ccNumber) {

  if (ccNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);
    getCart().length = 0;
  } else { // no credit card number given
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
