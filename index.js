var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)})
  return item + " has been added to your cart."
}

function viewCart() {
  var cartcontent = ""
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ".";
  } else if (cart.length > 1) {
  for (let i = 0; i < cart.length - 1; i += 1) {
    cartcontent += cart[i].itemName + " at $" + cart[i].itemPrice + ", ";
  }
  cartcontent += "and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + ".";
  return "In your cart, you have " + cartcontent;
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i += 1) {
    sum += cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  var sum = 0
  for (let i = 0; i < cart.length; i += 1) {
    if (item !== cart[i].itemName) {
      sum += 0
    } else if (item === cart[i].itemName) {
      sum += 1;
      cart.splice(i, 1);
    }
  }
  if (sum === 0) {
    return "That item is not in your cart."
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)  {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    let sum = total();
    cart.splice(0);
    return "Your total cost is $" + sum + ", which will be charged to the card " + cardNumber + ".";
  }
}
