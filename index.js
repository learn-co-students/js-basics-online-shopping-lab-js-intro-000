
var cart=[]
function setCart(newCart) {
  cart = newCart;
}





function getCart() {return cart}

function addToCart(item) {

                          cart.push({[item]:Math.floor(Math.random()*100)})
                          ;
                          console.log(`${item} has been added to your cart.`)
                          ;

                          return cart
                        }

function total() {
               let t = 0
                   for (var i = 0, l = cart.length; i < l; i++) {
                   var item=Object.keys(cart[i])[0]
                     t += cart[i][item]
                             }


                    return t
                           }
function viewCart() {
                    if (cart.length<1) {
                             console.log (`Your shopping cart is empty.`)
                                        }
                   else            {
                             var conlog='In your cart, you have ' ;
                            for (var i = 0, l = cart.length; i < l-1; i++) {
                               conlog=conlog+`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `
                                   }
                             conlog=conlog+`${Object.keys(cart[cart.length-1])[0]} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`
                                ;


                            console.log(conlog)
                             }
                                 }


 function removeFromCart (itemname) {if (cart.length==0) {
       console.log (`That item is not in your cart.`)
         }
         else {
                   for (var i = 0, l = cart.length; i < l; i++) {
                                      if (Object.keys(cart[i])[0]==[itemname])  {
                                      cart.splice(i-1,1)
                                                                                  }

                                    else {
                                      console.log (`That item is not in your cart.`)
                                         }
                                         ;return cart
                                         }
                                       }
                                     }
function placeOrder(cardNumber) {
                 if (cardNumber===undefined) {
                   console.log(`We don\'t have a credit card on file for you to place your order.`)
                 }
                                  else {
                                    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
                                     cart=[];
                                     return cart
                                       }
                                   }
