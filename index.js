var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/* We've started you off with a `cart` variable that points at an empty array. There are five functions that
you'll have to code in order to create a working shopping cart:
1. The `addToCart()` function accepts one argument, the name of an item.
    + Use that passed-in string to create a new object representing the item. The object should consist
    of two key-value pairs : `{ itemName: name of the item, itemPrice: price of the item, }`. As more
    items are added, the `cart` should start to look something like this: `[ {  itemName:"bananas", itemPrice: 17 },
     { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }]`.
    + The price of each item should be a randomly-generated integer between 1 and 100.
      * ***HINT***: Look into `Math.random()` and `Math.floor()`.
    + Upon the successful addition of a new item to the cart, the function should return `<itemName> has
    been added to your cart.` .
*/
function addToCart(item) {
  cart.push({itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100) + 1});
  return `${item} has been added to your cart.`;
}

/* 2. The `viewCart()` function does not accept any arguments. It should loop over every item in your cart,
returning the contents as one long, coherent statement in this format: `In your cart, you have bananas at $17,
pancake batter at $5, and eggs at $49.`
    + If the cart is empty, the function should instead return `Your shopping cart is empty.`
    + ***Note***: Pay close attention to the syntax above. The returned statement should be a single sentence
    that begins with `In your cart, you have `, terminates in a period, and can assume the following shapes
    according to how many items the cart contains:
      * 1 item — `In your cart, you have bananas at $17.`
      * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
      * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`*/

function viewCart() {
  let statement;
  if (cart.length === 0) {
    statement = "Your shopping cart is empty.";
  } else {
    statement = "In your cart, you have";
    for (let i=0; i<cart.length; i++) {
      if (cart.length === i+1) {
        statement += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      }
      else if (cart.length === i+2) {
        statement += ` ${cart[i].itemName} at $${cart[i].itemPrice}, and`;
      } else {
        statement += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      }
    }
  }
  return statement
}

/*The `total()` function accepts no arguments, iterates through the `cart` array, and returns the
current total value of the items in the cart.*/

function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
  }

/* The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
    + If the item *is* present in the cart, the function should remove the object from the cart and then
    return the updated cart.
    + ***HINT***: Check each object's itemName value key to see if it matches the parameter, then remove
    it if it matches. You might find
    [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to be useful.
    + If the cart does not contain a matching item, the function should return
    `That item is not in your cart.`*/
function removeFromCart(item) {
  let outcome = "That item is not in your cart."
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === `${item}`) {
      outcome = cart.splice(i, 1);
    }
  }
  return outcome
}
/*The `placeOrder()` function accepts one argument, a credit card number.
    + If no argument is received, the function should print out
    `Sorry, we don't have a credit card on file for you.`.
    + If a card number is received, the function should
      + empty the `cart` array
      + return `Your total cost is $71, which will be charged to the card 83296759.`
      (where `71` is the value returned by `total()` and `83296759` is the credit card number
      passed to `placeOrder()`)*/
function placeOrder(cardNumber) {
  let printOut
  if (cardNumber === undefined) {
    printOut = "Sorry, we don't have a credit card on file for you."
  } else {
      printOut = `Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`
      cart.splice(0, cart.length);
  }
  return printOut
}
