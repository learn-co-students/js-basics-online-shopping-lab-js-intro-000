var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = ((Math.floor(Math.random() * 100)) + 1);
  let toAdd = {itemName:item, itemPrice:price};
  cart.push(toAdd);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // define a string to add on to and eventually return
  let tracker = "In your cart, you have ";
  // if the cart array has no objects...
  if (cart.length === 0) {
    // return this string below
    return "Your shopping cart is empty.";
  }
    // else if the cart array has 1 object...
    else if (cart.length === 1) {
      // add this string to tracker
      tracker += (`${cart[0].itemName} at $${cart[0].itemPrice}.`);
    }
    // else if the cart array has 2 objects...
    else if (cart.length === 2) {
      // loop through the cart array...
      for (let n = 0; n < cart.length; n++) {
        // and if the object is the last object in the array...
        if (n === cart.length - 1) {
          // add this string to tracker
          tracker += (`${cart[n].itemName} at $${cart[n].itemPrice}.`);
          // otherwise, add this string to tracker
        } else {
            tracker += (`${cart[n].itemName} at $${cart[n].itemPrice}, and `);
        }
      }
    }
    // else if the cart array has 3 or more objects...
    else if (cart.length > 2) {
      // loop through the cart array...
      for (let n = 0; n < cart.length; n++) {
        // and if the object is the last object in the array
        if (n === cart.length - 1) {
          // add this string to tracker
          tracker += (`and ${cart[n].itemName} at $${cart[n].itemPrice}.`);
          // otherwise, add this string
        } else {
            tracker += (`${cart[n].itemName} at $${cart[n].itemPrice}, `);
        }
      }
    }
    // finally, return tracker
    return tracker;
  }

function total() {
  let totalPrice = 0;
  for (let k = 0; k < cart.length; k++) {
    totalPrice += cart[k].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // loop through the cart array
  for (let p = 0; p < cart.length; p++) {
    // if the value for any of itemName keys matches the parameter...
    if (cart[p].itemName === item) {
      // remove that object and return the updated cart without the object
      return cart.splice(p, 1);
    }
  }
  // if the cart doesn't contain a matching item, return this instead
    return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // if no argument received (it's undefined), return the string below
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  // otherwise... (so if a card number is received)
  // define a variable to track total cost
  let totalCost = 0;
  // loop through the cart array and for each object
  for (let w = 0; w < cart.length; w++) {
    // add the value of its itemPrice key to totalCost
    totalCost += cart[w].itemPrice;
    // and remove the object
    cart.splice(w, 1);
  }
  // after the loop is complete, return the statement below
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}
