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
 const price = Math.floor(Math.random() * 100) + 1;
 cart.push({ [item]: price });
 console.log(`${item} has been added to your cart.`);
 return cart;
}


function viewCart() {
  // write your code here
  const len = cart.length;
  if (!len) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < len; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];
    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[len-1] = "and ".concat(itemsAndPrices[len-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);

}


function total() {
  // write your code here
  let totalNum = 0;

  for (let i = 0, len = cart.length; i < len; i++) {
    for (let item in cart[i]) {
      totalNum += cart[i][item];
    }
  }

  return totalNum;
}


function removeFromCart(item) {
  // write your code here
  let isInCart = false;

  for (let i = 0, len = cart.length; i < len; i++) {
    if (cart[i].hasOwnProperty(item)) {
      isInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      len--;
    }
  }

  if (!isInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
