var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
/*
function addToCart(item) {
  function getPrice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + min) - min);
  }
  let newCart = {
    itemName : "name",
    itemPrice : getPrice(1, 100)
  }
  item = newCart;
  cart.push(item);
  return `${itemName} has been added to your cart.`
}
*/
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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
