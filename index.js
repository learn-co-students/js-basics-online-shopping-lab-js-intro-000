var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var cartItem = {
    itemName: item,
    itemPrice: price
  };
  cart.push(cartItem);
  return item + " has been added to your cart.";
}

function viewCart() {
  if(cart.length == 0){
    return "Your shopping cart is empty.";
  }
  else{
    var cartContents = [];
    for(let i = 0; i < cart.length; i++){
        cartContents.push(getCart()[i].itemName + " at $" + getCart()[i].itemPrice);
      }
      if(cartContents.length == 1){
        return "In your cart, you have " + cartContents + ".";
      }
      else{
        var array = [];
        for(let i = 0; i < cartContents.length - 1; i++){
          array.push(cartContents[i]);
        }
        return "In your cart, you have " + array.join(", ") + ", and " + cartContents[cartContents.length - 1] + ".";
        }
    }
}


function total() {
  var sum = 0;
  for(let i = 0; i < cart.length; i++){
    var x = getCart()[i].itemPrice;
    var sum = x + sum;
  }
  return sum;
}

function removeFromCart(item) {
  var deletedItems = [];
  for(let i = 0; i < cart.length; i++){
    if(getCart()[i].itemName === item){
      deletedItems.push(item);
      cart.splice(i, 1);
    }
  }
    if(deletedItems.length > 1){
      return cart;
    }
    else{
      return "That item is not in your cart.";
    }
}

function placeOrder(cardNumber) {
  if(cardNumber == undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var y = "Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".";
    cart = [];
    return y;

  }
}
