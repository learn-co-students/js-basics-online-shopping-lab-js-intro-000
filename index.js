var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newObj = {};
 let price = Math.floor(Math.random() * 100) + 1;
 newObj["itemName"] = item;
 newObj["itemPrice"] = price;
 cart.push(newObj);

 return `${item} has been added to your cart.`
}

function viewCart() {

  if(cart.length === 0) return 'Your shopping cart is empty.';
  let newArray = [];

  for(let i = 0; i < cart.length; i++) {
    let item = cart[i].itemName;
    let price = cart[i].itemPrice;

    newArray.push(`${item} at $${price}`)
  }

  if(newArray.length > 1 && newArray[newArray.length-1]) {
    newArray[newArray.length-1] = 'and ' + newArray[newArray.length-1] + '.';
  } else {
    newArray[newArray.length-1] = newArray[newArray.length-1] + '.';
  }

  return 'In your cart, you have '  + newArray.join(", ");

}

function total() {
  let totalPrice = 0;
  for(let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }

  return totalPrice;
}

function removeFromCart(item) {

  for(let i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }

  let amount = total();
  cart = [];

  return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`;
}
