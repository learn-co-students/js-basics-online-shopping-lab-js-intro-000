var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
var price = Math.floor(Math.random()*100, -2);
var string = `${item} has been added to your cart.`;
console.log(string);
var object = {};
object[item] = price;
cart.push(object);


return cart;
}

function viewCart() {
  var string = 'In your cart, you have ';
  var cartItem;

  if (!cart.length) {
      console.log('Your shopping cart is empty.');
  }
  else {
      for(var i = 0; i < cart.length; i++) {

      cartItem = cart[i];

  		for (var keys in cartItem) {
          if (i == cart.length - 1) {
              string += keys + " at $" + cartItem[keys] + ".";
              console.log(string);
          }
          else {
              string += keys + " at $" + cartItem[keys] + ", ";
          }

  			}

    }

  }

}

function total() {
    var total = 0;

        for(var i = 0; i < cart.length; i++) {
        var cartItem;

        cartItem = cart[i];

        for (var keys in cartItem) {
            total += cartItem[keys];
          }
        }
    return total;
}

function removeFromCart(item) {
var cartItem;
      for(var i = 0; i < cart.length; i++) {

        cartItem = cart[i];

          if (cartItem.hasOwnProperty(item)) {
            cart.pop();
            return cart;
          }
      }
      console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  if(!cardNumber) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
  else {

    console.log(string);
    cart.pop();
  }
}
