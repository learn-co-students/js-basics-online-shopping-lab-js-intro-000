var cart = []


function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}


///////////////////////////////////////////////////////////////////////////////
/*
1)

*/
function addToCart(item) {
  var objO = {} ;
  var itemPrice = 0 ;
  var itemName = item ;

  itemPrice = Math.floor (Math.random()*100) ; // generating a random number between 0 and 100




  objO[item]=itemPrice ;
  cart.push(objO) ;

  console.log( `${item} has been added to your cart.` ) ;

  //console.log( item , 'has been added to your cart.' ) ;
  return cart ;

}
/*
describe('#addToCart', function() {
  it("should add an item to the cart", function() {
    addToCart('pizza')

    expect(getCart().length).toEqual(1);
  });

  it("logs that the item has been added", function() {
    addToCart('pizza')

    expect(console.log).toHaveBeenCalledWith("pizza has been added to your cart.")
  })

  it("returns the cart", function() {
    expect(addToCart("pizza")).toEqual(getCart())
  })

  it("adds item dynamically", function() {
    addToCart('pizza');
    expect(getCart()[0]['item']).toEqual(undefined)
  })
});
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
2)

*/
//function viewCart() {
function viewCart() {

var cartLen = cart.length ;
var outStr  = "In your cart, you have " ;
var strK    = ", " ;


if (cartLen === 0) {
  console.log( "Your shopping cart is empty." )
  return ;
}

for (var obj_InCart in cart) {
   for(var key_InObj in cart[obj_InCart]){
       if (obj_InCart<cartLen-1){ strK = ", " } else {strK = "."} ;
       outStr = outStr +  key_InObj +  " at $" + cart[obj_InCart][key_InObj] +  strK  ;
      }

}
console.log( outStr ) ;
}


/*
describe('#viewCart', function() {
  it("should print each item in the cart and their cost", function() {
    addToCart("socks");
    addToCart("puppy");
    addToCart("iPhone");

    const socksCost = getCart()[0]["socks"];
    const puppyCost = getCart()[1]["puppy"];
    const iPhoneCost = getCart()[2]["iPhone"];

    viewCart();

    expect(console.log).toHaveBeenCalledWith(
      `In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`
    )
  });

  it("should print 'Your shopping cart is empty.' if the cart is empty", function() {
    viewCart();

    expect(console.log).toHaveBeenCalledWith("Your shopping cart is empty.")
  });
});
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
3)

*/
//function total() {
function total(){
  var sumTotal = 0 ;
  for (var obj_InCart in cart) {
  	 for(var key_InObj in cart[obj_InCart]){
                            sumTotal = sumTotal + cart[obj_InCart][key_InObj] ;


                      }
        }
return sumTotal ;
}
/*

*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
4)

*/

//function removeFromCart(item) {
  // write your code here
//}

function removeFromCart(item) {
for (var obj_InCart in cart) {
	 for(var key_InObj in cart[obj_InCart]){
                   if(key_InObj == item) {
                   cart.splice(obj_InCart,1);
                   return cart ;
	   }
      }
}
console.log("That item is not in your cart.")

}


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function placeOrder(creditCardNumber) {
if (!creditCardNumber  ||  creditCardNumber==0 ){
 console.log("We don't have a credit card on file for you to place your order.");
return ;
}

console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`) ;

cart.splice(0, Number.MAX_VALUE);

   return  cart ;
}





///////////////////////////////////////////////////////////////////////////////
