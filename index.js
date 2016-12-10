var cart = [];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart;
}
function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  var itemObj = {};
  itemObj[item] = price;
  cart.push(itemObj);
  console.log(item + " has been added to your cart.");
  return cart;
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

function viewCart(){
  var cartContents = "In your cart, you have";
  var itemList = [];
  var itemAndPrice = "";
  if (cart.length == 0){
    console.log ("Your shopping cart is empty." );
  }else{
    for(var i = 0; i < cart.length; i++){
      itemAndPrice = " " + Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])];
      itemList.push(itemAndPrice);
      console.log(itemList);
    }
    itemList.join();
    cartContents += itemList + ".";
    console.log(cartContents);
    return cartContents;
  }
}

function removeFromCart(itemToRemove){
  var itemInCart = false;
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(itemToRemove)){
      itemInCart = true;
      cart.splice([i],1);
    }
  }
  if (itemInCart === false) {
    console.log("That item is not in your cart.")
  }else {
    return cart;
  }
}

function placeOrder(cardNumber){
  var noCard = "We don\'t have a credit card on file for you to place your order.";
  if (!cardNumber){
      console.log(noCard);
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
