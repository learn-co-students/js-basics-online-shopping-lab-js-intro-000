var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({ "itemName": `${item}`, "itemPrice": Math.floor((Math.random() * 100) + 1)});
 return `${item} has been added to your cart.`;
 // write your code here
}

function viewCart() {
  if(getCart().length > 1){
  var newCart = [];
  //var text = "In your cart, you have ";
  for(let i = 0; i < getCart().length -1; i++){
     newCart.push(` ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
     }
     newCart.push(` and ${getCart()[getCart().length -1].itemName} at $${getCart()[getCart().length -1].itemPrice}.`)
    // newCart.splice(-1, 0, `and ${getCart()[cart.length -1]//.itemName} at  $${getcart()[cart.length -1].itemPrice}.`);
     return  "In your cart, you have" + newCart;
  }else if(getCart().length === 1){
       return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }else if(getCart().length === 0){
    return "Your shopping cart is empty.";
     }
}
function total(){
  var tot = 0;
  for(let i = 0; i < cart.length; i++){
    tot += cart[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  var nCart = [];
  for(let i = 0; i < cart.length; i++){
    cart[i].itemName;
    if(cart[i].itemName ===item){
      nCart.push(cart[i].itemName);
      cart.splice(i, 1);
    }
  }if(nCart.length === 0){
    return "That item is not in your cart."
  }
  return cart;
}

function placeOrder(cardNumber) {
  var to = total();
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }else{
    for(let i = 0; i < cart.length; i++){
      cart.pop(i);
    } return `Your total cost is $${to}, which will be charged to the card ${cardNumber}.`;
  }
}
