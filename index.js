
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

//mycode
var cart = [];

function getCart () {
  return cart;
}

function addToCart (item) {
  var price = Math.floor(100*Math.random());
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

/* this works in console but was yielding a spy not called error in ide.
function viewCart (){
  if (cart.length === 0) {
    console.log (`Your shopping cart is empty.`);
  } else {
    var cartArray = [];
      for (var cartItems in cart) {
        var myString = `, ${cartItems} at \$${cart[cartItems]}`;
        cartArray.push(myString);
      } console.log(`In your cart, you have${cartArray}.`);
    }
  }
*/

function viewCart (){
  if (cart.length === 0) {
    console.log (`Your shopping cart is empty.`);
  } else {
    var firstString = "In your cart, you have"
      for (var i = 0; i < cart.length; i++) {
        var objectName = cart[i];
        var itemName = Object.keys(cart[i]);
        var itemPrice = objectName[itemName];
        firstString = `${firstString} ${itemName} at $${itemPrice}`
        if (i < cart.length-1){ //determines punctuation
          firstString = `${firstString},`
        }else{
          firstString = `${firstString}.`
        }
      } console.log(firstString)

      }
  }


function removeFromCart(itemToRemove){
  for (var i = 0; i < cart.length; i++){
    var itemToCompare = cart[i];
    if (itemToCompare.hasOwnProperty(itemToRemove)){
      cart.splice(i, 1);
      return cart; // the return command breaks out of the function!!
    }
  } console.log("That item is not in your cart.")
}
/*
function removeFromCart(itemToRemove){
  var itemFound = false;
  var itemAtIndex = "";
  for (var i = 0; (i < cart.length || itemFound === false); i++){
    var itemAtIndex = Object.keys(cart[i])
    if (itemAtIndex === itemToRemove){
      cart.splice(i, 1);
      itemFound = true;
      return cart;
    } else if ((i === cart.length - 1) && (itemFound === false)) {
      console.log("That item is not found.")
    }

  }
}
*/

/*
function removeFromCart(itemToRemove){
  var i = -1;
  var itemFound = false;
	while (i < cart.length); {
    i++;
    var objectName = cart[i];
	  if (objectName.hasOwnProperty(itemToRemove)){
        // remove item and return cart &
        cart.splice(i, 1);
        itemFound = true;
        return cart;
      } else if ((i === cart.length - 1) && (itemFound === false)) {
          console.log("This item is not found");
   	  }
  }
}
*/

function placeOrder (cardNumber){
  if (!cardNumber) {
    console.log ("We don\'t have a credit card on file for you to place your order.");
  } else {
    var yourTotal = total();
    console.log (`Your total cost is $${yourTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
