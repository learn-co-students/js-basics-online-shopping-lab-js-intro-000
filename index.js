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

 var price=Math.floor((Math.random()*100)+1);
 var obj=new Object({itemName:item, itemPrice:price});
 getCart().push(obj);
 return `${obj.itemName} has been added to your cart.`

}

function viewCart() {
  // write your code here
  function whatToDo(){
    if (getCart().length===1){
      return `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
    }else if(getCart().length>1){
      var array=[];
      for (var i=0;i<getCart().length-1;i++){
         var whatIbuy=getCart()[i].itemName;
         var howMuch=getCart()[i].itemPrice;
         array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);
        }
      return `${array.join(", ")}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
}

}

  if(getCart().length===0){
    return `Your shopping cart is empty.`
  }else{
    return `In your cart, you have ${whatToDo()}.`
  }
}

function total() {
  // write your code here
  var sum=0;
  for (var i=0;i<getCart().length;i++){
     sum+=getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i=0;i<getCart().length;i++){
    if(getCart()[i].itemName===item){
      getCart().splice(i,1);
      return getCart();
    }
  }
      return `That item is not in your cart.`
  }


function placeOrder(cardNumber) {

  // write your code here
  if (arguments[0]==undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }else {
    var description=`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    setCart([]);
    return description;

  }
}
