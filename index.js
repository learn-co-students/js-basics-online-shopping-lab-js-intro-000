var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
console.log(itemName + ' has been added to your cart.');
var itemPrice = Math.floor(Math.random() * 100 + 1);
var good = {[itemName]: itemPrice};

cart.push(good);
return cart;
}

function viewCart() {
  getCart();

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
    }

  else if (cart.length === 1) {
    var itemInCart = Object.keys(cart[0])
    console.log('In your cart, you have ' + itemInCart + ' at $' + cart[0][itemInCart] + '.');

  }

  else if (cart.length === 2) {
      var itemOne = Object.keys(cart[0]);
      var itemOnePrice = cart[0][itemOne];
      var itemTwo = Object.keys(cart[1]);
      var itemTwoPrice = cart[1][itemTwo];
    console.log('In your cart, you have ' + itemOne + ' at $' + itemOnePrice + ' and ' + itemTwo + ' at $' + itemTwoPrice + '.');
    }

  else if (cart.length > 2) {
    var newArray = [];
    for(var i = 0; i < cart.length; i++) {
      var thing = Object.keys(cart[i]);
      var phrase = thing + ' at $' + cart[i][thing];
      newArray.push(phrase);
    }
    var last = newArray.pop();
    console.log("In your cart, you have " + newArray.join(', ') + ', and ' + last + ".");
}
}


function total() {
  var total = 0;
  for (var i=0; i < cart.length; i++) {
    var thing = Object.keys(cart[i]);
    total += cart[i][thing];
  }
  return total;
}


function removeFromCart(item){
  getCart();

  for (let i=0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])){
       console.log(item);
       var index = cart.indexOf(cart[i]);
     }
   }

    if (index > -1) {
       cart.splice(index , 1);
       console.log(cart);
       return cart;

     } else {
       console.log("That item is not in your cart.");
    }
  }


function placeOrder(cardNumber) {
  getCart();
  var cartTotal = total();

  if (cardNumber > 9999999) {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.')
    }

}
