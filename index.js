var cart = [];

// const randPrice = () => Math.floor(Math.random() * 100);

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  // cart = Object.assign({}, cart, {[item]: randPrice()});
  // let newPrice = randPrice
  let newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100) };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let message = "In your cart, you have ";
  if (cart.length == 0) return "Your shopping cart is empty.";
  else {
    for (let i = 0; i < cart.length; i++) {
      // cart[i]
      message += `${i + 1 == cart.length && cart.length > 1 ? 'and ': ''}${cart[i].itemName} at $${cart[i].itemPrice}${i + 1 == cart.length ? '.': ', '}`
    }
    // Object.keys(cart).forEach((key, i) => {
    //   message += `${key} at ${cart[key]}${i == cart.length - 1 ? '.' : ', '}`;
    // });
  }
  return message;
}

function total() {
  // write your code here
  let total = 0;
  if (cart.length == 0){
    return total;
  } else {
    for (let i = 0; i < cart.length; i++) {
      // cart[i]
      total += cart[i].itemPrice;
    }
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    let n_total = total();
    cart = [];
    return `Your total cost is $${n_total}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }

}
