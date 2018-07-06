var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


  function addToCart(item) {
    //sets price to randomly generated number from 1 to 100
    //creates new object representing item
    var price
    let newItem = {itemName: item , itemPrice: Math.floor(Math.random() * 100) + 1};
    //adds item to cart
    cart.push(newItem);
    //return statement with successful addition to cart
    return `${item} has been added to your cart.`;

}

function viewCart() {
  if (!cart.length) {
    return 'Your shopping cart is empty.';
  }
  //loops over items in cart
  for (var i = 0; i < cart.length; i++) {
    //prints statement for single item cart
  if (cart.length === 1) {
    return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
  }
  //prints statement for 2 item cart
  if (cart.length === 2) {
    return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`;
  }
  // prints statement for 3+item cart
else {
  return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[cart.length -2].itemName} at $${cart[cart.length -2].itemPrice}, and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`}
}
}
function total() {
  //returns total $$$ of items in cart
  var total = 0;
for (var i = 0; i < cart.length; i++) {
  total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);

  return cart;
}
}
  return "That item is not in your cart.";
  }
  // write your code here


  function placeOrder(cardNumber) {
    if (!cardNumber) {
      return "Sorry, we don't have a credit card on file for you."
    }
    else { var cartTotal = total(); setCart([]);
      return`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    }
  return cartTotal;
  }
