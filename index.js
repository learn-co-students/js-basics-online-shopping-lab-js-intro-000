var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //var cart = [];
  var obj = {};
 // write your code here
  obj[item] = Math.floor(Math.random()*100);
  console.log(obj);
  cart.push(obj);
  console.log(cart);
  console.log(Object.keys(obj) + " has been added to your cart.");
  return cart;
}

function viewCart(a) {
  // write your code here
  var phrase = 'In your cart, you have ';
  if(cart.length > 0){
    for (var i=0; i < cart.length; i++ ) {
      for (var item in cart[i]) {
        var obj = cart[i];
        //console.log(obj);
        var itm = Object.keys(obj).toString();
        //console.log(itm);
        var price = obj[item];
        //console.log(price);
        var unit = itm + " at " + "$" + price + ", ";

        phrase += unit;
      }
    }
    console.log(phrase.slice(0, -2) + ".");
  } else {
    console.log("Your shopping cart is empty.");
  //return phrase.slice(0, -2);
  }

}

/*
var cart = [{"iPhone":300}, {"Samsung":400}, {"Nokia":150}];

function viewCart(a) {
  // write your code here
  var phrase = 'In your cart, you have';
  for (var i=0; i < cart.length; i++ ) {
    for (var item in cart[i]) {
      var obj = cart[i];
      console.log(obj);
      var itm = Object.keys(obj).toString();
      console.log(itm);
      var price = obj[item];
      console.log(price);
    }
  }

}

viewCart(cart);

//'In your cart, you have socks at $64, puppy at $49, iPhone at $54.'

*/


function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i < cart.length; i++ ) {
    //for (var itm in cart[i]) {
      var obj = cart[i];
      console.log(obj);
      //var itm = Object.keys(obj).toString();
      //console.log(itm);
      if (obj.hasOwnProperty(item)) {
        console.log(obj.hasOwnProperty(item));
        cart.splice(i,1);
        return cart;
      }
    }

    console.log("That item is not in your cart.");
    //}
  }

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber) {
    console.log("Your total cost is " + "$" + total() + ", which will be charged to the card " + cardNumber +".");
    cart.pop();
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
