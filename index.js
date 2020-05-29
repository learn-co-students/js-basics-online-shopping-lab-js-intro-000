var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const obj = {};
 obj.itemName = item;
 obj.itemPrice = Math.floor(Math.random() * Math.floor(100));
 obj.func = function() {return this.itemName + " at $" + this.itemPrice;};
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var current_cart = [`In your cart, you have`];
  if(cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
      current_cart += ` ${cart[0].func() + "."}`;
      return current_cart;
    } else if (cart.length === 2) {
        current_cart += ` ${cart[0].func()}, and ${cart[1].func() + "."}`;
        return current_cart;
      } else {
          for(var i = 0; i < cart.length; i++) {
            current_cart.push(`${cart[i].func()},`);
          }
          current_cart.splice(-1, 0, "and");
          var cart_string = current_cart;
          var final = cart_string.join(" ");
          return final.slice(0,-1) + ".";

    }
}


function total() {
    var sum = 0;
    for(var i = 0; i < cart.length; i++) {
      sum += cart[i].itemPrice;
    }
    return sum;
}


function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1)
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined ) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cart_total = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return cart_total;
   }
}
