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
  var items={}
  items["itemName"]=item
  items["itemPrice"]=Math.floor((Math.random() * 100) + 1)
  cart.push(items)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var statement="In your cart, you have "
  if (cart.length > 0) {
  for (let i=0;i<cart.length;i++) {
    if (i != cart.length-1) {
      statement=statement+cart[i]["itemName"]+ " at $"+cart[i]["itemPrice"]+", "
  }
    else if (i > 0){
      statement=statement+"and "+cart[i]["itemName"]+ " at $"+cart[i]["itemPrice"]+"."
    }
    else {
      statement=statement+cart[i]["itemName"]+ " at $"+cart[i]["itemPrice"]+"."

    }
  }
  return statement
}
  else {
    return "Your shopping cart is empty."
  }
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
