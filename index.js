var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var price = Math.ceil(Math.random()*100)
cart.push({[item] : price})
console.log(`${item} has been added to your cart.`)
return cart

/* var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart*/
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}


function total() {
  // write your code here
  let t=0

  for (var i=0, l = cart.length; i++){
    for (var item in cart[i]){
      t +=cart[i][item]
    }
  }
   return t
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++)
  if (Object.keys(cart[i]) == item ){
    cart = [...cart.slice(0,i), ...cart.slice(i+1)];
    return cart;
  }
  console.log("That item is not in your cart");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order");
  }else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
