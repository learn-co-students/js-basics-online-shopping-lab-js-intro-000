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
 var itemobject = { //Make item string into an object
   itemName: item,
   itemPrice: (Math.floor(Math.random() * Math.floor(100))), //Random price between 0 and 100
 };
 cart.push(itemobject); //Add new item object into cart
 return `${item} has been added to your cart.` //Return message
}

function viewCart() {
  // write your code here
  var length= cart.length;
  if(length===0) { //Give message if empty cart
    return "Your shopping cart is empty."
  }
  else if (length===1) { //Give message if one item in cart
    return `In your cart, you have ${cart[length-1].itemName} at $${cart[length-1].itemPrice}.`
  }
  else{
    var counter= 0; //Keep track of which item spot we're in for the cart
    var itemlistprice = ""; //Middle part of the string with all the items and prices
    while(counter < length-1){ //Add every item and price to the string besides last item
      itemlistprice += `${cart[counter].itemName} at $${cart[counter].itemPrice}, `;
      counter++;
    }
    return `In your cart, you have ${itemlistprice}and ${cart[counter].itemName} at $${cart[counter].itemPrice}.`
  } //Add middle part of string with rest of the message and the last item in the cart
}

function total() {
  // write your code here
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var ifthere = false; //Check if there is item in cart
  var index; //Check spot in cart the item is in
  for (var i = 0; i < cart.length; i++) {
    if (item===cart[i].itemName) {
      ifthere = true; //Go through the cart of items. If matching item, make statment true and record the index of it in the cart.
      index = i;
    }
  }
  if (ifthere===true) { //If item is in cart, remove it using splice and return updated cart.
    cart.splice(index, 1); //Remove 1 item at the index value
    return cart
  }
  else { //If no item return this message
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===undefined) { //If no argument, return this message.
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var sum= total(); //Get total cart value
    cart = []; //Empty cart
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}
