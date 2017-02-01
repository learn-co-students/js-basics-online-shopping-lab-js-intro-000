var cart=[];

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

function getCart() {
  return cart;
}

function addToCart(a) {
  var price = Math.floor(Math.random()*100);

  var obj = {[a]:price};
  cart.push(obj);
  console.log(a + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var pair = [];
  var string = "In your cart, you have ";
  if (cart.length>0) {
      for (var i = 0, l = cart.length; i < l; i++) {
        for (var itemNames in cart[i]) {
          pair.push(itemNames + " at $" + cart[i][itemNames]);
        }
      }
    for (var i=0; i<pair.length; i++){
      string+=pair[i];
      if(i+1<pair.length){
        string+=", ";
      }else {
        string+=".";
      }
    }
    console.log(string);
  }else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        //console.log(item + ", " + cart[i][item]);
        cart.splice(item, 1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  }else {
    console.log("Your total cost is $"+total()+", which will be charged to the card "+ cardNumber +".");
  }
  cart.length = 0;
}
