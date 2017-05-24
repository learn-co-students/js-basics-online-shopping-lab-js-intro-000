var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) +1) ;
  cart.push( {[item]: price} );
  console.log(`${item} has been added to your cart.`);
  return(cart);
}

function viewCart() {
  if (!cart.length){
    console.log("Your shopping cart is empty.");
    return("Your shopping cart is empty.")
  }
  var string = "In your cart, you have ";
  for (let i=0; i < cart.length; i++){
    var object = cart[i];
    for (var key in object )
      string += `${[key]} at $${object[key]}`;
      if (i == (cart.length - 1)){
        string += "."
      } else {
        string += ", "
      }
  }
  console.log(string);
  return(string);
}

function total() {
  if (!cart.length){
    console.log("Your shopping cart is empty.");
    return("Your shopping cart is empty.")
  }
  var total = 0;
  for (let i=0; i < cart.length; i++){
    var object = cart[i];
    for (var key in object )
      total += parseInt(object[key]);
  }
  console.log(total);
  return(total);
}

function removeFromCart(item) {

  var found = false;
/*
  if (!cart.length){
    console.log("Your shopping cart is empty.");
    return("Your shopping cart is empty.")
  }
*/
  for (let i = 0; i < cart.length; i++){
    var object = cart[i];
    //console.log(cart[i])
    for (var key in object ){
      //console.log(`Key is ${key}`);
      //console.log(`Item is ${item}`);
      if (key == item){
        //console.log(`${key} == ${item}`);
        found = true;
        cart.splice(i,1);
      }
    }
  }
  if (!found){
    console.log('That item is not in your cart.');
  }
}

function placeOrder(cardNumber) {

  if (!cardNumber){
    console.log("We don\'t have a credit card on file for you to place your order.");
  }

  var total = 0;

  for (let i = 0; i < cart.length; i++){
    var object = cart[i];
    for (var key in object){
      total += parseInt(object[key]);
    }
  }

  console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
