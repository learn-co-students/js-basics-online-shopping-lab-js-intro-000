var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // cart[item] = `${Math.floor(Math.random() * 100) + 1}`
 var price = Math.floor(Math.random() * 100) + 1      //math random returns an number between 0 and 1, including 0, so I have to multiply by 100 to get 0-100, round, then add 1 to remove the edge case of 0
 cart.push({[item] : price})
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {

  if (!cart.length){                                    // if cart.length is 0, then !0 is 1. best to get this condition out of the way
    return console.log("Your shopping cart is empty.")
  }

  var itemAtPriceStrings = [];                    //creating new array of strings using concatenation of "item" and "price" at each iteration
  for(let i = 0; i < cart.length; i++){
    var itemAtPrice = cart[i];                  //made a variable to represent the cart's item at each iteration
    var item = Object.keys(itemAtPrice)[0]        //returns item name (key)    "Object.keys method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop"
    var price = itemAtPrice[item]           // returns item price (value)
     itemAtPriceStrings.push(`${item} at \$${price}`)           //back slash escapes the first $ character
   }

    /* depending on cart length, I'll be concatenating strings differently. I can use a switch case with the parameter of cart length to determine what action to take
      0: this was already addressed earlier
      1: this requires no concatenation;
      2: this requires an " and " between the two strings
      3+: this requires ", " between each string, except the last string needs an "and" before it. so maybe use array.join for all the elements except the last one which gets an "and " prefix concatenated to it
      and then at the very end, we can have console.log(`In your cart, you have ${itemAtPriceStrings}.`)
    */
    switch(itemAtPriceStrings.length){
      case 1:
        break; //go directly to end with no concats or array.joins needed
      case 2:
        itemAtPriceStrings = itemAtPriceStrings.join(" and ") // join the two strings with an "and"
        break;
      default:                                                                                // if not 0, 1, 2, then the only options are 3+
        itemAtPriceStrings[itemAtPriceStrings.length - 1] = "and " + itemAtPriceStrings[itemAtPriceStrings.length - 1] // last string (the element with index of the length minus 1) with "and " concatenation
        itemAtPriceStrings = itemAtPriceStrings.join(", ") //join everything with ", " including the last string which now has the "and " attached
    }
    console.log(`In your cart, you have ${itemAtPriceStrings}.`)
  }


function total() {
  var totalPrice = 0; // initialize to zero to avoid undefined error
for(let i = 0; i < cart.length; i++){
                                        // totalPrice(new) = totalPrice(old) + price of iterated item......... how can I access the key for each element object?
                                              // maybe create an array of just all the prices?      allPrices = []; allPrices.push(`${cart[i]}`)}
                                                                  /* totalPrice = allPrices.reduce(add, 0);     nooooooooope
                                                                  function add(a, b){
                                                                                    return a + b;} */
for (let item in cart[i]) {   // honestly no clue why my expression totalPrice += cart[i][item]; doesn't work unless it has "let item in cart"
 totalPrice += cart[i][item];
 }
 }
return totalPrice
}

function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}   // I SKIPPED THE LAST TWO FUCKING PROBLEMS BECAUSE THIS ENTIRE LAB WAS A SHITSTORM OF FRUSTRATION AND HOURS OF GOOGLING OBSCURE BULLSHIT AND WONDERING WHY MY SOLUTION DOESNT WORK.
// WHY ARENT THE ANSWERS COMMENTED EITHER?!
