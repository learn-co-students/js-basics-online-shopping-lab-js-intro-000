var cart=[{iphone: 400}, {xbox: 300}, {ps4: 250}];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price= Math.floor((Math.random()* 100)+0);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  } else{
    var itemsAndPrices =[];
    for(var i=0; i<cart.length; i++){
      var itemObject = cart[i];
      var itemName = Object.keys(itemObject);
      var itemPrice = itemObject[itemName];
      itemsAndPrices.push(` ${itemName} at $${itemPrice}`);
    }
    console.log(`In your cart, you have${itemsAndPrices}.`);
  }
}

function removeFromCart(item){
  var found = false;
  for (var i=0;i <cart.length; i++){
    if (Object.keys(cart[i])[0] == item){
      found = true;
      cart.splice(i,1)
    }
  }
  if (found == false) {
    console.log("That item is not in your cart.");
  } else {
    return cart;
  }
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


function placeOrder(creditCardNumber){
  if(!creditCardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`);
    cart = [];
  }
}
