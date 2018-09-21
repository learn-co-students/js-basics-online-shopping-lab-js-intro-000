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
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

  var x = getRandomInt(100);
  var newItem = {
      itemName : item,
      itemPrice : x
  }

  cart.push(newItem);
  return newItem.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    var opener = "In your cart, you have "
    var array = []

    var out = cart[0].itemName + " at $" + cart[0].itemPrice
    array.push(out)

    return opener + array + "."
  }
  else if (cart.length > 1) {
    var opener = "In your cart, you have"
    var array = []

      for (var i = 0; i < cart.length; i++) {
        if ( i === (cart.length -1)){
          var out = " and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
          array.push(out)
        }
        else{
          var out = " " + cart[i].itemName + " at $" + cart[i].itemPrice
          array.push(out)
        }
    }
    return opener + array
  }
}

function total() {
  // write your code here
  var total = []

  for (var i = 0; i < cart.length; i++) {
    var a = cart[i].itemPrice
     total.push(a)
  }

  function arrSum(arr){
  return arr.reduce(function(a,b){
    return a + b
    }, 0);
  }
  var out = arrSum(total)
  return out
}

function removeFromCart(item) {
  // write your code here

  var vals=[];
  for(var i=0;i<cart.length;i++){
   vals.push(cart[i].itemName);
    }

  var n = vals.includes(item)

  if (n === true){
    var index = vals.indexOf(item)
    cart.splice(index, 1)
    return cart
  }
  else{
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {

    if (typeof cardNumber == 'undefined'){
      return 'Sorry, we don\'t have a credit card on file for you.'
    }
    else {
      var amount = total()
      cart = []
      return "Your total cost is $" + amount + ", which will be charged to the card " + cardNumber +"."
    }
}
