var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 var itemName = item.toString();
 var itemObject = {[itemName]:price};
 cart.push(itemObject)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   }
   else if (cart.length === 2) {
     var items = [];
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         items.push(item + " at $" + cart[i][item])
       }
     }
     console.log("In your cart, you have " + items.join(" and ") + ".");
   }
   else {
     var items = [];
     for (var i = 0; i < cart.length-1; i++) {
       for (var item in cart[i]) {
         items.push(item + " at $" + cart[i][item])
       }
     }
     for (var i = cart.length; i < cart.length; i++) {
       for (var item in cart[i]) {
         items.push(" and"+ item + " at $" + cart[i][item])
       }
     }

     console.log("In your cart, you have " + items.join(", ") + ".");
   }
}

function poopCart() {
  if (cart.length>0) {
      var statement = "In your cart, you have"
      for (var i = 0; i < cart.length; i++) {
        var localObject = cart[i];
        var localName = Object.keys(localObject);
       	localName = localName.toString();
        var localPrice = localObject[localName];
        var addition = ` ${localName} at $${localPrice}`;
        var statement = statement + addition;
        if (i === cart.length-1) {
          statement= `${statement}.`;
        }
        else {
          statement= `${statement},`;
        }
      }
    }
  else {
    var statement = "Your shopping cart is empty"
  }
    return statement;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
