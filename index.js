var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObject = {
      itemName: `${item}`,
      itemPrice: Math.floor(100 * Math.random()) + 1
                  }
  cart.push(newObject);
  return item + " has been added to your cart.";
}

function viewCart() {
  let cartStuff = [];
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    let lastItem = `${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    for (var i = 0; i < cart.length - 1; i++){
      cartStuff.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    return `In your cart, you have ${cartStuff.join(", ")}, and ${lastItem}`;
    }

}

function total() {
  let sum = 0;
  for (var i = 0; i < cart.length; i ++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {

  for (let i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
    return "That item is not in your cart.";

}



function placeOrder(cardNumber) {
  if (cardNumber != undefined){
    const totalPrint = total();
    cart = [];
    return `Your total cost is $${totalPrint}, which will be charged to the card ${cardNumber}.`;
  }
  return "Sorry, we don't have a credit card on file for you.";
  // write your code here
}
