var cart =[];

function setCart() {
  cart = [];
}

function getCart(){
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

function addToCart(itemToPurchase){
  var price = Math.floor(Math.random() * 100);
  var currentItem = new Object({[itemToPurchase] : price});
  cart.push(currentItem);
  console.log(`${itemToPurchase} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(!cart.length){
    console.log('Your shopping cart is empty.');
  }else{
    var itemsInCart = '';
    for(var i = 0; i < cart.length; i++){
      for(var item in cart[i]){
        if(i === cart.length - 1){
          itemsInCart += ` ${item} at \$${cart[i][item]}`;
        }else{
          itemsInCart += ` ${item} at \$${cart[i][item]},`;
        }
      }
    }
    console.log('In your cart, you have' + itemsInCart + '.');
  }
}

function removeFromCart(itemToRemove){
  var startingCartLength = cart.length;
  for(var i = 0; i < cart.length; i++){
    var testItem = cart[i];
    if(Object.keys(testItem)[0] === itemToRemove){
      cart.splice(i,1);
      break;
    }
  }
  if(startingCartLength === cart.length){
    console.log("That item is not in your cart.");
  }else{
    return cart;
  }
}

function placeOrder(creditCardNumber){
  if(!creditCardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    var totalCost = total();
    console.log(`Your total cost is \$${totalCost}, which will be charged to the card ${creditCardNumber}.`);
    setCart();
  }
}
