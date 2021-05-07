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
 var randomPrice = Math.floor((Math.random()*100)+1);
 let itemObject = {itemName: item,itemPrice: randomPrice};
 cart.push(itemObject);
 return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let phrase = "In your cart, you have";
    for (let i=0;i<cart.length;i++) {
      phrase = `${phrase} ${cart.length>1&&i===cart.length-1 ? "and " : ""}${cart[i].itemName} at $${cart[i].itemPrice}${i===cart.length-1 ? "" : ","}`
    }
    return `${phrase}.`
  }
}

function total() {
  // write your code here
  var sum = 0;
  for (let i=0;i<cart.length;i++) {
    sum = sum + cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  let itemPosition = "";
  for (let i=0;i<cart.length;i++) {
    if(cart[i].itemName===item) {
      itemPosition = i;
    } else {}
  }
  if (itemPosition==="") {
    return "That item is not in your cart."
  } else {
    cart.splice(itemPosition,1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber===undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var receipt = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.splice(0);
    return receipt;
  }
}
