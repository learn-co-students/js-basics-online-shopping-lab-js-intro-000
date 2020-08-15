function addToCart(item) {
 // write your code here
 let obj = {itemName:item, itemPrice: Math.floor((Math.random() * 100) + 1)};
 getCart().push(obj);
 return item + "can add items to the cart";
}

function viewCart() {
  // write your code here
  if (getCart().length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let out = "In your cart, you have ";
    for (let i=0; i < getCart().length; i++) {
      if (getCart().length > 1 && i === getCart().length-1) {
        out = out + "and ";
      }
      let val = getCart()[i].itemName + " at $" + getCart()[i].itemPrice;
      out = out + val;
      if (getCart().length > 1 && i != getCart().length-1) {
        out = out + ", ";
      }
    }
    return out + ".";
  }
}

function total() {
  // write your code here
  let totalPrice = 0;
  for (let i=0; i<getCart().length; i++) {
    totalPrice += getCart()[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  let found = false;
  let foundIndex = "";
  let cart = getCart();
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      found = true;
      foundIndex = i;
    }
  }
  if (found) {
    cart.splice(foundIndex, 1);
    setCart(cart);
    return cart
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let totalPrice = total();
    setCart([]);
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
