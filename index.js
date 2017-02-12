var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function getCart(){
  return cart
}
function addToCart(item){
  let price = Math.floor(Math.random() * 10);
  let purchase = new Object();
  purchase[item] = price; // making up the object
  cart.push(purchase); // appending the object to the array
  console.log(`${item} has been added to your cart.`)
  return cart
}
function viewCart(){
  var arrayItemPrice = [];

  if (!cart.length){
    return console.log("Your shopping cart is empty.")
  }
  for (var indice in cart){
    for (var coisa in cart[indice]){
      arrayItemPrice.push(`${coisa} at $${cart[indice][coisa]}`)
    }
  }
  let message = `In your cart, you have ${arrayItemPrice.join(", ")}.` ;

  return console.log(message)
}
function removeFromCart(item){
  for (let indice in cart){
    if (cart[indice].hasOwnProperty(item)){
      cart.splice(indice, 1)
      return cart
    }
  }
  return console.log("That item is not in your cart.")
}
function placeOrder(cardNumber){
  if (!cardNumber){
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  let totalCost = total();
  let message = `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return console.log(message)
}
