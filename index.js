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
  var itemName = item;
  var itemPrice = Math.floor(Math.random()*100);
  var myItem = new Object({[itemName]: itemPrice });

  cart.push(myItem);

  console.log(itemName + " has been added to your cart.")
  return cart;

}

function viewCart() {

//Messy as f*ck

  var myString = "";

  if (cart.length === 0) {
      myString = "Your shopping cart is empty";
    }

  for(let i = 0; i < cart.length; i++){
    let object = cart[i];
    let key = Object.keys(object);

  if (cart.length === 1) {
      myString += "In your cart, you have " + key + " at $" + object[key];
  }
  else if (cart.length === 2 && i == 1) {
    myString += "In your cart, you have " +  Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])];
  }
  else if (cart.length > 2) {
    if (i === 0) {
      myString += "In your cart, you have " +  Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])];
    } else if (i>0) {

    if (i < cart.length-1) {
    myString +=  ", " +  Object.keys(cart[i]) +" at $" + cart[i][Object.keys(cart[i])];
    } if (i === cart.length-1) {
      myString += ", and " +  Object.keys(cart[i]) +" at $" + cart[i][Object.keys(cart[i])];
    }
  }
  }
}
myString += ".";
console.log(myString)
}



function total() {

var sum = 0;

for(let i = 0; i < cart.length; i++){
  let object = cart[i];
  let key = Object.keys(object);

  sum += object[key];
}

return sum;


  // write your code here
}

function removeFromCart(item) {

  var inCart = false;

for(let i = 0; i < cart.length; i++){
  let object = cart[i];
  if (object.hasOwnProperty(item)) {
    inCart = true;
    cart.splice(i,1);
  }


}
  if (inCart===false) {
  console.log("That item is not in your cart.")
  }

return cart;
}

function placeOrder(cardNumber) {
  // write your code here

  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log("Your total cost is $" +total() + ", which will be charged to the card " + cardNumber + ".")
    cart = [];
  }

}
