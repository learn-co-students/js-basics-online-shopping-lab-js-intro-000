var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name)
{
 var item={itemName: name, itemPrice: 1+Math.floor(Math.random()*99)};
 cart.push(item);
 return`${name} has been added to your cart.`;
 return cart;// write your code here
}

function viewCart() {
  var str=[],str2='In your cart, you have ';
  if (cart.length===0)
  {
    return 'Your shopping cart is empty.'
  }
  else
  {
    for (var i=0;i<cart.length;i++)
  {
    if(i===0)
    {
      str.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    else if(i===cart.length-1&&cart.length>1)
    {
      str.push(`, and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
    }
    else
    str.push(`, ${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  for (var j=0;j<str.length;j++)
  {
    str2=str2+str[j];
  }
  if (str.length===1)
  {
    str2+='.';
  }
  return str2
}// write your code here
}

function total()
{
  var sum=0;
  for (let i=0;i<cart.length;i++)
  {
    sum=sum+cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(name)
 {
   var flag=0;
   for(let i=0;i<cart.length;i++)
   {
     if (cart[i].itemName===name)
     {
       cart.splice(i,1);
       flag++;
     }
   }
   if (flag===0)
   {
     return 'That item is not in your cart.'
   }
   else
   return cart;
 }



function placeOrder(cardNumber)
{
  var finalTotal=total();
  if (typeof cardNumber!== 'undefined')
  {
    for(let i=0;i<cart.length;i++)
    {
      cart.pop();
    }
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`;
  }
  else
  {
    return "Sorry, we don't have a credit card on file for you.";
  }
  // write your code here
}
