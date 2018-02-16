var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomPrice() {
  return parseInt(Math.random() * 100);
}

function addToCart(item) {
  cart.push({
   [item]: randomPrice()
 });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
    let k = Object.keys(cart[0])[0];
    console.log(`In your cart, you have ${k} at $${cart[0][k]}.`);
  } else if (cart.length === 2) {
      let k = Object.keys(cart[0])[0];
      let k2 = Object.keys(cart[1])[0];
    console.log(`In your cart, you have ${k} at $${cart[0][k]} and ${k2} at $${cart[1][k2]}.`);
  } else {
    let text = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      let k = Object.keys(cart[i])[0];
      if (i != cart.length - 1) {
        text += `${k} at $${cart[i][k]}, `;
      } else {
        text += `and ${k} at $${cart[i][k]}.`;
      }
    }
    console.log(text);
    //let k = keys[length - 1];
    //text += `and ${keys[k]} at $${cart[length - 1][k]}.`;
  }
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += Object.values(cart[i])[0];
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber != null || cardNumber != undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    while(cart.length > 0) {
      cart.pop();
    }
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
