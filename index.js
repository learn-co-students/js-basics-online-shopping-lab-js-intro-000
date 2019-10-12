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
 cart.push({itemName: item,
            itemPrice: Math.floor( Math.random() * 100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  var report = "In your cart, you have";
  for (let i = 0; i < cart.length; i++) {
    let connector = (i === cart.length - 2 && cart.length > 1)
                    ? ', and'
                    : ((i === cart.length - 1)
                        ? '.'
                        : ',');
    report += ` ${cart[i].itemName} at $${cart[i].itemPrice}${connector}`;
  }
  return `${report}`;
}

function total() {
  // write your code here
  return cart.reduce( (sum, x) => sum += x.itemPrice, 0);
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0;
      i < cart.length && cart[i].itemName !== item;
      i++);
  if (i === cart.length) {
    return "That item is not in your cart.";
  }
  setCart( [...cart.slice(0, i), ...cart.slice(i + 1)]);
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (undefined === cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  let tot = total();
  setCart([]);
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
}
