var cart=[];


function setCart(newCart) {
  cart = newCart;
}

function getCart(){

  return cart;

}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t
}


function addToCart(item){

 var newobj = {};

 var price = Math.floor(Math.random()*100);
 newobj[item]=price;


 cart.push(newobj);
 //console.warn(item);
 console.log(item+" has been added to your cart.");
 //console.warn(cart);
 return cart;

}




function viewCart(){
 var newarray = [];
 if(cart.length == 0){

   console.log("Your shopping cart is empty.");

 } else{





    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        //console.warn( " "+item+ " at $"+ cart[i][item]);
        newarray[i] = " "+item+ " at $"+ cart[i][item];
        //console.warn(newarray);
      }


    }

    console.log("In your cart, you have"+newarray+".");
    //console.warn("In your cart, you have"+newarray+".");


}


}

function removeFromCart(chkitm){

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {

        if (item == chkitm){
           //console.warn(cart);
           //delete cart[i];
           cart.splice(i, 1);

           //console.warn(cart);

           return cart;
         }

    }

  }
  console.log("That item is not in your cart.");
  //console.warn("That item is not in your cart.");
}



function placeOrder(ccnum){

 if (ccnum == null){

   console.log("We don't have a credit card on file for you to place your order.");
   //console.warn("We don't have a credit card on file for you to place your order.");

 }else {

   console.log("Your total cost is $"+total()+", which will be charged to the card "+ccnum+".");
   //console.warn("Your total cost is $"+total()+", which will be charged to the card "+ccnum+".");
   cart.length=0;


 }


}
