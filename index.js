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
 var itemObject = { itemName:`${item}`, itemPrice: Math.floor(Math.random()*100) };
 cart.push(itemObject);
 return itemObject.itemName + " has been added to your cart.";
}

function viewCart() {
  // write your code here
  if (cart.length===0){
      return "Your shopping cart is empty."

  }
  else if (cart.length === 1) {
      var itemObject = cart[0]
      return `In your cart, you have ${itemObject.itemName} at $${itemObject.itemPrice}.`

  }
  else if (cart.length === 2) {
      var string = "In your cart, you have "
        for (var i = 0; i < cart.length; i++){
          if (i === 0){
             string += `${cart[i].itemName} at $${cart[i].itemPrice}, and `
           } else {
                string += `${cart[i].itemName} at $${cart[i].itemPrice}.`
           }
        }
        return string
  }
   else if (cart.length >= 3) {
        string = "In your cart, you have "
         for (i = 0; i < cart.length; i++){
            if (i < 2){
              string+= `${cart[i].itemName} at $${cart[i].itemPrice}, `
            }   else {
               string+= `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
            }
         }
   return string
   }
}


function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  if (item != cart[item]) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    var totalAmount = total();
    cart = [];
    return `Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`;
  }
  else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}
