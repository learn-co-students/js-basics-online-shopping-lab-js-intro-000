var cart = [];

function getCart() {return cart;}
function setCart(newCart) {cart = newCart;}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  getCart().push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  if (getCart().length == 0) {
    console.log("Your shopping cart is empty.");
    return;
  }

  var result = "In your cart, you have";

  for (let i = 0; i < getCart().length; ++i)
    for (let item in getCart()[i])
      result += i == 0 ? ` ${item} at $${getCart()[i][item]}` : `, ${item} at $${getCart()[i][item]}`;

  result += '.';

  console.log(result);
}

function removeFromCart(deleteItem)
{
  var found = false;

  for (let i = 0; i < getCart().length; ++i)
  {
    for (var item in getCart()[i])
      if (item == deleteItem)
      {
        getCart().splice(i,1);
        found = true;
        break;
      }

    if (found)
      break;
  }

  if(!found)
    console.log("That item is not in your cart.");
}

function placeOrder (cardNumber) {
  if (!cardNumber)
    console.log("We don't have a credit card on file for you to place your order.");
  else
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  setCart([]);
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
