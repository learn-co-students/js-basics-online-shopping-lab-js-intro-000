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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart(){
   return cart;
}

function addToCart(item){
    let price = Math.floor(Math.random() * 100);
    cart.push({[item]: Math.floor(price)});
    console.log(item + " has been added to your cart.");
    return cart;
}


function viewCart(){
  var num =	cart.length;
  const sentce = [];
  if(num === 0){
    return console.log("Your shopping cart is empty.");
  }
  for (let i = 0; i < num; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    sentce.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${sentce.join(', ')}.`)
}



function removeFromCart(item){
  var num =	cart.length;
  var itemCheck = false;
   for(let i=0;i<num;i++){
     if(cart[i].hasOwnProperty(item)){
         cart = cart.slice(0,i).concat(cart.slice(i+1));
         console.log(cart);
             itemCheck = true;
        }
      }

      console.log(itemCheck);

   if(!itemCheck){
     console.log("That item is not in your cart.");
   }

   return cart;
}

function placeOrder(creditNo){
   if(creditNo == null){
     console.log("We don't have a credit card on file for you to place your order.");
   }else{
     console.log(`Your total cost is $${total()}, which will be charged to the card ${creditNo}.`);
     cart = []; 
   }
}
