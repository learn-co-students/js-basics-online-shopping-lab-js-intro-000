var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = new Object();
  obj[item] = Math.floor(Math.random() * 101) + 1;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart// write your code here
}

function viewCart() {
  if (cart.length > 0) {
    var collect = [];
    for (var i = 0; i < cart.length; i++) {
      collect.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
  }else {
      console.log("Your shopping cart is empty.");
      return
    }

  if (collect.length === 1) {
       console.log(`In your cart, you have ${collect}.`);
     }else if (collect.length === 2){
        collect[collect.length - 1] = `and ${collect[collect.length - 1]}`;
        console.log(`In your cart, you have ${collect.join(" ")}.`)
      }else {
        collect[collect.length - 1] = `and ${collect[collect.length - 1]}`;
        console.log(`In your cart, you have ${collect.join(", ")}.`);
      }
        return // write your code here
  }

function total() {
  var count = 0;
    for(var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])[0];//"Apples" I couldn't understand why couches added [0] next to Object.keys(cart[i]),:(!
      count = count + cart[i][key];
    }
    return count  // write your code here
}
var totalAmount = total();

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return cart;
      }
    }
    console.log(`That item is not in your cart.`);
      return cart;
  }

function placeOrder(cardNumber) {
  if (cardNumber) {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0);
}else {
  console.log("Sorry, we don't have a credit card on file for you.");
}
return cart// write your code here
}
