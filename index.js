var cart = [];
cart.push(Object({ itemName: item, itemPrice: price }));
var item = "";
var price = Math.floor((Math.random() * 100) + 1);
var itemPrice = price;
var itemName = item;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
var itemName = "";
var price = Math.floor((Math.random() * 100) + 1);
  if (cart.push(Object({ itemName: item, itemPrice: price }))) {
   return `${item} has been added to your cart.`;
} else (cart.length <= 0); {
    return "Your shopping cart is empty.";
  }
} 


function viewCart() {
Object({ itemName: item, itemPrice: price });
var item = "";
var price = Math.floor((Math.random() * 100) + 1);
var itemPrice = price;
var itemName = item;
 if (cart.length <= 0) {
   return "Your shopping cart is empty.";
 } else if (cart.length === 1) {
     return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
   } else if (cart.length === 2) {
     return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
   }  else {
   (cart.length > 2);
     return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`;
   }
}

function total() {
  var cartTotal = 0;
  for (var i = 0; i < cart.length; i++){
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
  }



//               ${getCart()[0].itemName}

function removeFromCart(item){
  var counter = 1;
  var notDeleted = "not deleted";
  for(var i = 0; i <= cart.length -1; i++){
    Object.entries(cart[i]).forEach(([key, value]) =>{
      if (item === value){
        return cart.splice(i, 1);
      } else {
        counter += 1;
      }
    });
  }
  if (notDeleted === "That item is not in your cart."){
    return "This function should fail the test!";
  } return "That item is not in your cart.";
}





// {
//   for (var i = 0; i < cart.length; i++) {
//     if (item === cart.length[i]) {
//       cart.splice(i + 1, 1);
//       return cart;
//     } else {  
//       (item !== cart.length[i]);
//       return "That item is not in your cart.";
//     }
//   } 
// } 

function placeOrder(cardNumber) {
  var cardTotal = 0;
  if (cardNumber) {
    cardTotal = total();
    cart.splice(0, cart.length);
    return `Your total cost is $${cardTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
    cardNumber <= 0;
    return "Sorry, we don't have a credit card on file for you.";
  }
}
  
  
  

