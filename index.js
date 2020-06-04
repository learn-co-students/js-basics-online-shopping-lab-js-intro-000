var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100
var itemObj={itemName:item,itemPrice:price}
cart.push(itemObj);
return item+" has been added to your cart."
}


  function viewCart() {
  // write your code here
  var outputString="In your cart, you have ";
var result=[];
var initial;

  if(cart.length==0)

    return "Your shopping cart is empty.";

  for(var i=0;i<cart.length;i++)
  {

if(cart.length==1)
{

    result.push(cart[i].itemName+" at $"+cart[i].itemPrice+".");

  }

else if(i==cart.length-1)
       result.push(" and "+cart[i].itemName+" at $"+cart[i].itemPrice+".");


else
{
  //if (initial!=undefined)
if(result.length!=0)

     result.push(" "+cart[i].itemName+" at $"+cart[i].itemPrice);
else {
   result.push(cart[i].itemName+" at $"+cart[i].itemPrice);
}

   }

  //   else {
    //   result=cart[i].itemName+" at $"+cart[i].itemPrice+",";

  // }
}
  return outputString+result;
}



function total() {
  // write your code here
  var total=0;
    for(var i=0;i<cart.length;i++)
    {
      total+=cart[i].itemPrice;
}
return total;
}

function removeFromCart(item) {
  var result=[];
  // write your code here



  for(var i=0;i<cart.length;i++)
  {
    if((cart.includes(item)==false))
      {
        result.push("That item is not in your cart.");

      }


 if(cart[i].itemName==item)

    {


      cart.splice(i,1);
      result.push(cart);


    }


}
return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var result;
  if(cardNumber==undefined)
  {
    result="Sorry, we don't have a credit card on file for you.";
  }
  else {
    var cartTotal=total();
  result="Your total cost is $"+cartTotal+", which will be charged to the card "+cardNumber+".";
cart.splice(0);
  }
  // write your code here
  return result;
}
