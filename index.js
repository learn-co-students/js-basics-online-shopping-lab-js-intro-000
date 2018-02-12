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
 cart.push({[item]: Math.floor(Math.random() * 100)});
 console.log(`${item} has been added to your cart.`);
 return cart;
}




function viewCart() {
var itemArray = [];
  cart.forEach(function(value, index, array) {
   var key = Object.keys(array[index]);
   var price = array[index][key];
	 itemArray[index] = `${key} at $${price}`;
});

  if(cart.length < 1) {
    console.log('Your shopping cart is empty.');
  }

  if (cart.length === 1) {
    console.log(`In your cart, you have ${itemArray[0]}.`);
  }

  if (cart.length === 2) {
    console.log(`In your cart, you have ${itemArray[0]} and ${itemArray[1]}.`);
  }

  if (cart.length >= 3) {

    var str = `In your cart, you have `;

   for(var i = 0; i < itemArray.length-1; i++) {
     str +=  itemArray[i] + ', ';
   }

    var lastItem = itemArray.splice(-1).toString();
    var combinedStr = `and ${lastItem}.`;

    console.log(str + combinedStr);
  }

}

function total() {
  var total = 0;
  cart.forEach(function(value, index, array) {
   var key = Object.keys(array[index]);
   var price = array[index][key];
   total += price;
});

return total;

}

function removeFromCart(item) {
  var beforeLength = cart.length;
  cart.forEach(function(value, index, array) {
    if(cart[index].hasOwnProperty(item)){
      cart.splice(index, 1);
    }
  });

  var afterLength = cart.length;

  if(afterLength === beforeLength) {
    console.log('That item is not in your cart.');
    return cart;
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(arguments.length) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
