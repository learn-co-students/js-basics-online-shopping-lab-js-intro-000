var cart = [{ cat: 1 }, {dog: 2}, {fish: 3}, {otter: 5}];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100+1);
    cart.push({ [item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}




function viewCart() {
  let i = 0
  var printedArr =[]
  if(cart.length===0){
    console.log(`Your shopping cart is empty.`)
  }
 else if(cart.length< 3){
    for (let i= 0; i<cart.length; i++){
   printedArr.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
  }
  console.log (`In your cart, you have ${printedArr.join(" and ")}.`)
  }else{
    for (let i= 0; i<cart.length-1; i++){
      printedArr.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    console.log(`In your cart, you have ${printedArr.join(", ")}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`)
  }
}
  

function total() {
  var totalprice = 0;
  for (var i = 0; i < cart.length; i++){
    var itemi = Object.keys(cart[i]);
    var pricei = cart[i][itemi];
    totalprice = totalprice + pricei }
  return totalprice;
}

function removeFromCart(item) {
  var present = false
  if (cart.length > 0){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart.splice(i, 1)
      console.log(cart)
      present = true}}}
  if (present === false){console.log('That item is not in your cart.')}
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("Sorry, we don't have a credit card on file for you.")   }
   else {console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
    cart = [];
 }
