var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getPrice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min) - min);
  }
  let price = getPrice(1, 100);
  Object.assign({}, cart, {itemName: "name", itemPrice: price});
  cart.push(item);
  return `${cart[itemName]} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
      let string = "In your cart, you have "
      for (let i = 0; i < cart.length; i++) {
      string += `${cart[itemName]} at \$ ${cart[itemPrice]}${(i === cart.length -1 ? "." : ",")}`
      }
      return string;
    }
}

function total() {
      let total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.itemPrice, initialValue)
      return "Your total is \$ ${total}.";
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
