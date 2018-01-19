var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item)
{
   var price = Math.floor(Math.random()*100)+1;
   
   cart.push({[item]: price});
   console.log(`${item} has been added to your cart.`);
   return cart;
}

//addToCart("glove");
//addToCart("onion");

function viewCart()
{
  debugger;
  const l = cart.length
  var cartItems = [];
  
  if (l === 0)
  {
    console.log('Your shopping cart is empty.');
  } 
  
  for(let i=0; i<l; i++)                  //for(key in cart)
  {
    let cartItem = cart[i];               //cart[key];
    let item = Object.keys(cartItem)[0];  
    let price = cartItem[item];
    
    cartItems.push(`${item} at \$${price}`);
  } 
  
  switch(cartItems.length) {
    case 1:
      break;
    case 2:
      cartItems = cartItems.join(" and ");
      break;
    default:
      cartItems[l-1] = "and ".concat(cartItems[l-1]);
      cartItems = cartItems.join(", ");
  }
  
  console.log(`In your cart, you have ${cartItems}.`);
}

//viewCart();

function total() {
  var pricePerItemInCart = [];
  var totalPrice = 0;
  
  for(var i = 0; i < cart.length; i++)
  {
    for (let item in cart[i]) {
      totalPrice += cart[i][item];      // cart[i][item] = cart[i]"glove": [item] means property in an array
    }
  }
  
  return totalPrice;
}

total(cart);

function removeFromCart(item)
{
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    } 
  }
  
  console.log('That item is not in your cart.')
  
  return cart
}

function placeOrder(cardNumber)
{
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
  }

placeOrder()
