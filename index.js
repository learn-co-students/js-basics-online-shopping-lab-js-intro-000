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
 var price = Math.floor(Math.random() *100) + 1;
 var array = { itemName: item, itemPrice: price };
 cart.push(array);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length==0) {
    return "Your shopping cart is empty.";
  } else if (cart.length==1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length==2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var array = [];
    var arrayB = [];
    var a = cart.length;
    for(let i=0; i<cart.length-1; i++) {
      array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    for(let i=cart.length-1; i<cart.length; i++) {
      arrayB.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have${array}, and${arrayB}.`;
  }
}

function total() {
  // write your code here
  var sum = 0;
  for(let i=0;i<cart.length;i++) {
    sum = sum + cart[i].itemPrice;
    }
    return sum;
}

function removeFromCart(item) {
  if(cart.includes(item)) {
    var index = cart.indexOf(item);
    getCart();
    getCart.splice(index,1);
  } else {
    return "That item is not in your cart.";
  }
}


function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.");
  }
}
