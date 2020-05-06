var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//************************* Remove Test Variables before Production************

// var cart = [];

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  var basket = {}

  basket.itemName = item
  basket.itemPrice = price

  cart.push(basket);

  return cart , `${item} has been added to your cart.`;
}

//************************* Remove Test Variables before Production************
var myCart = [
{  itemName:"bananas", itemPrice: 17 },
{ itemName:"pancake batter",itemPrice: 5 },
{ itemName:"eggs", itemPrice: 49 }
];

function viewCart() {
  var currentCart = [];

  function cond() {
    if (num === 0) {
      currentCart.push((`In your cart, you have ${myCart[num].itemName} at $${myCart[num].itemPrice}`));
    } else if (num > 0 && num < myCart.length - 1) {
        currentCart.push((`you have ${myCart[num].itemName} at $${myCart[num].itemPrice}`));
    } else {
        currentCart.push((`and ${myCart[num].itemName} at $${myCart[num].itemPrice}`));
    }
  }
  for (num = 0; num < myCart.length; num++){
     cond();
  }
  return(currentCart);
}

// * 1 item — `In your cart, you have bananas at $17.`
// * 2 items — `In your cart, you have bananas at $17, and pancake batter at $5.`
// * 3+ items — `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`

// (currentCart.push(`In your cart you have ${myCart[1].itemName} at $${myCart[1].itemPrice}, `));
// (currentCart.push(`and ${myCart[3].itemName} at ${myCart[3].itemPrice}.`));
// (currentCart.push(`you have ${myCart[2].itemName} at $${myCart[3].itemPrice},`));

//************************* Remove Test Variables before Production************





function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
