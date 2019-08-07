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
 var newItem = new Object({itemName: `${item}`, itemPrice: Math.floor(Math.random()*100 +1)})
 cart.push(newItem)
 return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length == 0){
    return "Your shopping cart is empty."
  }
  var newarray = []
  for (let i = 0; i < cart.length; i++){
      newarray.push(cart[i]['itemName'] + " at $" + cart[i]['itemPrice'])

    }
    var mystring = "In your cart, you have "
    if (newarray.length == 1){
      mystring += newarray + "."
    }
    else if (newarray.length == 2) {
      mystring += (newarray[0] + ", and " + newarray[1] + "." )
    }
    else if (newarray.length >= 3) {
      var lastelement = newarray.pop()
      var other_item = newarray.join(", ")
      mystring += (other_item + ", and " + lastelement + "." )
    }
    return mystring
  }


function total() {
  // write your code here
  var sum = 0
  for (let i = 0; i < cart.length; i++){
    sum = cart[i].itemPrice + sum
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++)
    if (cart[i].itemName == item){
      cart.splice(i, 1)
      return cart
    }
    return "That item is not in your cart."
    return cart
}


function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
    var price = total()
    cart = []
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
    }
  else{
    return "Sorry, we don't have a credit card on file for you.";
  }
}
