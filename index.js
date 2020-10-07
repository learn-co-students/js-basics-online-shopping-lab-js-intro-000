var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price= Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(item+"has been added to your cart.")
  return cart
 // write your code here
}

function viewCart() {
  if(cart.length===0){
  console.log("Your shopping cart is empty.")
  // write your code here
}else{
  const l=cart.length
   for(let i=0;i<l;i++){
     let itemAndPrice=cart[i]
     let item=Object.keys(itemAndPrice)[0]
     let price= itemAndPrice[item]
  itemsAndPrices.push(`${item} at \$${price}`)
   }
   console.log(`In your cart, you habe ${itemsAndPrices.join(',')}.`)
}

function total() {
  let t=0
  return t
  // write your code here
}

function removeFromCart(item) {
  var itemInCart=false
  for(var i=0;i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart= true;
      cart.splice(i,1);
    }
  }
  if (!itemInCart){
    console.log("That item is not in your cart.");
  }
  return cart
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
   if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditCard + ".");
    cart = [];
  }
}
