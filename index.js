var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const ss= item;
 cart.push({[ss]:Math.floor((Math.random() * 100) + 1)});
 console.log(item+" has been added to your cart.");
 return cart;
}

function viewCart() {
  if(cart.length<=0)
    console.log("Your shopping cart is empty.");
  else {
    var s="In your cart, you have ";
    var lp=[];
    var vals=[];
     var ks=[];
     for(var w=0;w<cart.length;w++)
           ks[w]=Object.keys(cart[w]);
     for(var a=0;a<ks.length;a++)
         vals[a]=cart[a][ks[a]];

    for(var key in cart)
    {
      lp.push(ks[key]+" at $"+vals[key]);

    }
    if(cart.length==1)
      console.log(s+lp[0]+".");
    if(cart.length==2)
      console.log(s+lp[0]+" and "+lp[1]+".");
    if(cart.length>=3)
    {
      var tt="";
      for(var k=0;k<lp.length;k++)
      {
        if(k==lp.length-1)
          tt=tt+"and "+lp[k]+".";
        else
        tt=tt+lp[k]+", ";
      }
      console.log(s+tt);
    }
  }
}

function total() {
  var tot=0;
  var vals=[];
   var ks=[];
   for(var w=0;w<cart.length;w++)
         ks[w]=Object.keys(cart[w]);
   for(var a=0;a<ks.length;a++)
   {
       vals[a]=cart[a][ks[a]];
       tot=tot+vals[a]
    }
  return tot;
}

function removeFromCart(item) {
  var flg=true;
  for(var i=0;i<cart.length;i++)
  {
    if (cart[i].hasOwnProperty(item)) {
          flg=false;
          if(item==Object.keys(cart[i]))
          {
              cart.splice(i,1);

            }

    }
  }
    if(flg) {
      console.log("That item is not in your cart.");
    }

    return cart;

  }

function placeOrder(cardNumber) {
  if(!cardNumber)
    console.log("Sorry, we don't have a credit card on file for you.");
    else {
      console.log("Your total cost is $"+total()+", which will be charged to the card "+cardNumber+".");
      cart=[];
    }
}
