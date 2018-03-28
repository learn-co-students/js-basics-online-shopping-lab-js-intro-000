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
 var itemName=item
 var itemPrice=Math.floor(Math.random()*10+1)
 var obj={ [itemName]: itemPrice}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  let l=getCart().length;
  if(!l)
    console.log("Your shopping cart is empty.")

  else {
    var array=[]

    for(var i=0;i<l;i++)
    {
      var item=Object.keys(cart[i])
      var price=cart[i][item]
      array.push(`${item} at \$${price}`)
    }

    switch(array.length)
    {
      case 1: console.log(`In your cart, you have ${array}.`);

      case 2: console.log(`In your cart, you have ${array.join(" and ")}.`);

      default:
        array[l-1]="and ".concat(array[l-1]);
        console.log(`In your cart, you have ${array.join(", ")}.`)
    }

  }
}

function total() {
  // write your code here
  var total=0;

  for(var i=0;i<getCart().length;i++)
  {
    var item=Object.keys(cart[i])
    total+=cart[i][item];
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var l=cart.length
  for(var i=0;i<l;i++)
  {
    if(cart[i].hasOwnProperty(item))
    {
      cart=cart.slice(0,i).concat(cart.slice(i+1));
      l--;
      return cart
    }
  }

    console.log('That item is not in your cart.')

  return cart

}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
  {
    console.log("Sorry, we don't have a credit card on file for you.");
  }

  else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart=[]
  }
}
