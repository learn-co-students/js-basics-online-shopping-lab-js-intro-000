var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //defining newItem object to be added to cart
 var newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 }

 cart.push(newItem) //adds item to the end of the cart array
 return `${newItem.itemName} has been added to your cart.` //return message
}


function viewCart() {
  // write your code here
  switch(cart.length){
    case 0:
     return "Your shopping cart is empty.";

    case 1:
     return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`;

    case 2:
     return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}, and ${cart[1].itemName} at \$${cart[1].itemPrice}.`;

    default:
     var cartItems = `In your cart, you have `;
     for (var i = 0; i < cart.length - 1; i++){
       cartItems += `${cart[i].itemName} at \$${cart[i].itemPrice}, `
     }
     cartItems += `and ${cart[i].itemName} at \$${cart[i].itemPrice}.`
     return cartItems;
  }
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is \$${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
