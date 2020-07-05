var cart = [];
// oh how nice, i don't have to type out all the basics myself.

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// apparently the above are already done.

//console.log("------------CONSOLE LOG IS HERE");
//  oh so stuff out here also gets called.
//  why isn't it calling inside then
function addToCart(item) {
  var numInternal = Math.floor(Math.random()*100) + 1;
    // floor rounds down to integer, random is something between 0.1.
  var objInternal = {
    itemName : item,
    itemPrice : numInternal,
  }
  cart.push(objInternal);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var stringInternal;
  var objInternal;
  var numInternal;

  if (cart.length === 0) {
    stringInternal = "Your shopping cart is empty.";
  }
  else {
    numInternal = 1; // this is human positioning in array
    stringInternal =  "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) { // AAAAAAAAAAAAAAAA
      //objInternal = cart[i];
      //stringInternal = stringInternal + objInternal.itemName + "at $" + objInternal.itemPrice;
      // oh they want me to use ${}. okay. fine.
      stringInternal = stringInternal + `${cart[i].itemName} at $${cart[i].itemPrice}`;
        // spaces are counted inside ``s. in this case two adjacent $'s is accurate.'

      // setup for next item
      if (numInternal < cart.length - 1){ // next is not final item
        stringInternal = stringInternal + ", ";
      }
      else if (numInternal === cart.length - 1) { // next is final item
        stringInternal = stringInternal + ", and ";
      }
      else if (numInternal === cart.length) { // all items read
        stringInternal = stringInternal + ".";
      }
      numInternal++;
    }

  }
  console.log("------------CONSOLE LOG IS HERE"); // this doesn't print.
    // console.log in any of these methods doesn't print.
  return stringInternal
}

function total() {
  var numInternal = 0;

  for (var i = 0; i < cart.length; i++){ // AAAAAAAAAAAAAAAAAA
    numInternal = numInternal + parseInt(cart[i].itemPrice);
      // oh yeah can do sequential recall horizontally too. forgot.
  }

  return numInternal;
}

function removeFromCart(item) {
  // check each object for a match. if no match, say no match. if match, remove.
  var numInternal = null;
  // return `CART LENGTH IS --- --- ${cart.length}`;
  //  says cart length is 0. what's going on here.
  // errors not helping at all. "expected watermelon to equal vanilla" there's two items in the cart.
  // apparently using "===" everywhere causes "cart[i].itemName" to be undefined.
  for (var i = 0; i < cart.length; i++) { // AAAAAAAAAAAAAAAAAAAAa
    if (cart[i].itemName === item){
        // i spent a whole GODDAMN hour trying to figure out the error here
        // and it was fixed by putting the three evals here as triple = instead of single.
        // even though earlier doing that caused THE SAME error.
        // now it fixed it.
        // couldn't console.log or return to check spec parts either.
        // oh check every step they said.
        // i literally don't fucking even.

        // oh ok i'm not hallucinating.
        // it literally failed and then passed with no changes.
        // what a waste of my time.
      numInternal = i;
      break
    }
  }

  if (numInternal != null){ // if the object was found
    if (numInternal === 0){ // thing is first item
      cart.shift()}
    else if (numInternal === (cart.length - 1)){ // thing is last item
      cart.pop()}
    else { // thing is inbetween somewhere
      cart = [...cart.slice(0,numInternal), ...cart.slice(numInternal+1)]}

    //cart.splice(1,numInternal);
    //  this does the same thing as 102~108.
    return cart;
  }
  else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined"){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    var numInternal = total();
    cart = [];
    return `Your total cost is $${numInternal}, which will be charged to the card ${cardNumber}.`;
  }
}
