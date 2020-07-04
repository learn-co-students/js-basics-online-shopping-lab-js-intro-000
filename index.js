var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let fullcart={};
  let price=Math.floor(100*Math.random());
  fullcart["itemName"]=item;
  fullcart["itemPrice"]=price;
  cart.push(fullcart);
  return `${item} has been added to your cart.`;// write your code here
}

function viewCart() {
  // write your code here
  let output1="In your cart, you have ";
  let output2="Your shopping cart is empty.";
    if (cart.length==0){
      return output2;
      }
    else if (cart.length==1){
      let output3=output1.concat(`${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`)
      return output3;
    }
    else{
      for (let i =0;i<cart.length;i++){
        if(i<cart.length-1){
          output1=output1.concat(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `)}
        else{
          output1=output1.concat(`and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`)}
         }
      return output1;
      }
}

function total() {
  // write your code here
  let sum=0
  for (let i =0;i<cart.length;i++){
        sum=sum+cart[i]["itemPrice"]}
    return sum
}

function removeFromCart(item) {
  // write your code here
      let dummy1=-1
      for (let i=0;i<cart.length;i++){
          if(cart[i]["itemName"]==item){
              dummy1=i;}
      }
      if(dummy1==-1){
          return "That item is not in your cart.";
      }
      else{
      cart.splice(dummy1,1);}
}

function placeOrder(cardNumber) {
  // write your code here
if (Number.isInteger(cardNumber)==true){
  let outputstring=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart.splice(0,cart.length);
  return outputstring;
  }
else{
    return `Sorry, we don't have a credit card on file for you.`;
}
}
