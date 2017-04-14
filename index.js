var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
var list = []
list[item]= Math.floor(Math.random()*100);
cart.push(list);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
if (cart.length === 0)
{
  console.log("Your shopping cart is empty.")
}
  var sentence = 'In your cart, you have '
  for (var i =0; i <cart.length; i++)
  {
    for (var cartItem in cart[i])
    {
      sentence+= `${cartItem} at $${cart[i][cartItem]}, `
    }
  }
  sentence = sentence.replace(/, $/, ".");
  console.log(sentence);
    }

function total() {
var t = 0;
for (var i = 0; i < cart.length; i++)
{
  for (var item in cart[i])
  {
    t+= cart[i][item]
  }
}
  return t;
}

function removeFromCart(item) {
for (var i = 0; i <cart.length; i++)
{
  if (cart[i].hasOwnProperty(item))
  {
    cart.splice(i,1)
    return cart
  }
}
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
if (cardNumber === undefined) {
  console.log("We don't have a credit card on file for you to place your order.")
}
else
{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
}
