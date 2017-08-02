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
var myItem = {};
myItem [item]= Math.floor(100 * Math.random());
cart.push(myItem);
 console.log( [item]  + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length == 0){
      console.log("Your shopping cart is empty.");
                      }
   if (cart.length ==1){
                var i = 0;
                for (var key in cart[i]) {
                      console.log("In your cart, you have " + key + " at $" + cart[i][key]  + ".") ;
                                        }
                              }
  if(cart.length ==2){
              var i = 0;
              var m=[];
              var n =[];
              for(i=0;i< cart.length; ++i){
                       for (var key in cart[i]) {
                          m[i]  =  key;
                          n[i] =  cart[i][key];
                                                }
                                          }

        console.log("In your cart, you have " + m[0] + " at $" + n[0]  + " and " + m[1] + " at $"  + n[1] +".") ;

                    }
      if (cart.length  > 2){
              var i = 0;
              var m=[];
              var n =[];
              var myStr = "In your cart, you have "
              for(i=0;i< cart.length; ++i){
                       for (var key in cart[i]) {
                          m[i]  =  key;
                          n[i] =  cart[i][key];

                          myStr = myStr + m[i ] + " at $" + n[i];
                          if ( i <= cart.length - 2) { myStr = myStr + ", ";}
                          if ( i == cart.length -2) {  myStr = myStr + "and ";}
                            if(i == cart.length -1  ){ myStr =myStr +".";}
                                                }
                                          }
                      console.log(myStr);

                                  }
  }

function total() {
  // write your code here;
  var myTot = 0;
  var   i = 0;
  for (i= 0; i < cart.length; ++i ){
          for (var key in cart[i]) {

                myTot  =  myTot + cart[i][key];
                                    }

                                    }
          return myTot;
}

function removeFromCart(item) {

  var   i = 0;
  if (cart.length == 0){console.log("That item is not in your cart.")}
  else {for (i= 0; i < cart.length; ++i ){
            for (var key in cart[i]) {
              if (cart[i].hasOwnProperty([item])){
                                cart.splice(i,1);

                                  return cart     }else{
                                    console.log("That item is not in your cart.")
                                                        }

                                       }
                                    }

      }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined || cardNumber == null || cardNumber.length <= 0){
  console.log(  `Sorry, we don\'t have a credit card on file for you.` )
}else{ var myTot = total();
  console.log(`Your total cost is $${( myTot)}, which will be charged to the card ${(cardNumber)}.`);

  cart.length =     0;
}
}
