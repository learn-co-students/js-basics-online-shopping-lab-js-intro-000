var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//************************* Disable Test Variables before Production************

// var cart = [];

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  var basket = {}

  basket.itemName = item
  basket.itemPrice = price

  cart.push(basket);

  return cart , `${item} has been added to your cart.`;
}

//************************* Disable Test Variables before Production************

// * 1 item — `In your cart, you have bananas at $17.`
// * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
// * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`

// (currentCart.push(`In your cart you have ${myCart[1].itemName} at $${myCart[1].itemPrice}, `));
// (currentCart.push(`and ${myCart[3].itemName} at ${myCart[3].itemPrice}.`));
// (currentCart.push(`you have ${myCart[2].itemName} at $${myCart[3].itemPrice},`));

// function viewCart() {
//   var currentCart = [];
//
//   if (cart.length === 0) {
//     return `Your shopping cart is empty.`;
//   } else {
//
//   for (n = 0; n < cart.length; n++){
//      cond();
//   }
  //loop var [n] / n will work with any object size.
  //the test wants to see an index number instead of loop variable.
  //undefined it unrelated to hoisting issues.
//   function cond() {
//     if (n === 0) {
//       currentCart.push((`In your cart, you have ${cart[n].itemName} at $${cart[n].itemPrice}`));
//
//     } else if (n > 0 && n < cart.length - 1) {
//         currentCart.push((` you have ${cart[n].itemName} at $${cart[n].itemPrice}`));
//
//     } else {
//         currentCart.push((` and ${cart[n].itemName} at $${cart[n].itemPrice}`));
//     }
//   }
//
//   return currentCart.toString() + '.';
//   }
// }

// var cart = [
// { itemName:"bananas", itemPrice: 17 },
// { itemName:"pancake batter",itemPrice: 5 },
// { itemName:"eggs", itemPrice: 49 }
// ];

function viewCart() {
  var currentCart = [];

  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {

  // n / num / i is undefined error is coming from loop.
  // switched from 'for' to 'while'.
  while (currentCart.length < cart.length){
     cond();
  }

  function cond() {
    if (currentCart.length === 0) {
      currentCart.push((`In your cart, you have ${cart[currentCart.length].itemName} at $${cart[currentCart.length].itemPrice}`));

    } else if (currentCart.length > 0 && currentCart.length < cart.length - 1) {
        currentCart.push((` ${cart[currentCart.length].itemName} at $${cart[currentCart.length].itemPrice}`));

    } else {
        currentCart.push((` and ${cart[currentCart.length].itemName} at $${cart[currentCart.length].itemPrice}`));
    }
  }

  return currentCart.toString() + '.';
  }
}

//************************* Disable Test Variables before Production************





function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
