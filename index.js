var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

   function getPrice(){
   var price = Math.floor(Math.random()* 100);
   return price;
  }
  var obj={};
  cart.push(obj);
  obj[item] = getPrice();
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  getCart();
  if(Object.keys(cart).length===0){
  console.log("Your shopping cart is empty.");
  } else {
  var arr= [];
   for(var i=0; i<cart.length;i++){
   for(var item in cart[i]){
       arr.push(`${item} `+ "at "+ `$${cart[i][item]}`);
    }

  }
   var str='In your cart, you have ';
   var newstr = arr.join(", ");
   console.log(str + newstr + ".");
  }
}

function total() {
  getCart();
  var totalCost = 0;
  for(var i=0; i<cart.length;i++){
  for(var item in cart[i]){
  totalCost += cart[i][item];
  }
  }
return totalCost;
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++){
          if(cart[i].hasOwnProperty(item)){
          cart.splice(i,1);
          return cart;
      }
   }
   console.log('That item is not in your cart.');

}

function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  cart=[];
}
