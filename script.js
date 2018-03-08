

var categories = ["veggie", "flowers", "mushrooms"];

veggie = function() {
  document.getElementById('veggie').style.display = "inline-block";
  document.getElementById('flowers').style.display = "none";
  document.getElementById('mushrooms').style.display = "none";
}

flowers = function() {
  document.getElementById('flowers').style.display = "inline-block";
  document.getElementById('veggie').style.display = "none";
  document.getElementById('mushrooms').style.display = "none";
}

mushrooms = function() {
  document.getElementById('mushrooms').style.display = "inline-block";
  document.getElementById('flowers').style.display = "none";
  document.getElementById('veggie').style.display = "none";
}


// with help from https://youtu.be/6wjLrS97tV8

//this is the shopping chart, start with empty array
var shoppingCart = []

//object constructor to define properties of an item (ie cabbage, 2, 1)
var Item = function(name, price, quantity){
    this.name = name,
    this.price = price,
    this.quantity = quantity
    // this.total = (this.price) * (this.quantity)
}

//display items in the cart
var displayCart = function(){
  var output = " ";
  for (var i=0; i<shoppingCart.length; i++){
    output += "<li>"+ shoppingCart[i].name+ "   $"+ shoppingCart[i].price+ "   quantity: " + shoppingCart[i].quantity+ "</li> ";
    document.getElementById("cartItems").innerHTML = output;
  }
}

//ensure if a item is clicked on >1, it adds one (not duplicate)
function addItemToCart(name, price, quantity) {
    for (var i in shoppingCart) {
      if (shoppingCart[i].name === name) {
          shoppingCart[i].quantity += quantity ; //why not +=1?
          return;
      }
     }
//push the newly constructed item into cart - NOT IN USE
    var item = new Item(name, price, quantity);
      shoppingCart.push(item);
      displayCart();
    }

var itemsForSale = ["squash", "garlic","cabbage","bellpepper", "ghostpepper", "sunflower", "hippie-flower", "lily-flower", "chomper", "zombie-flower","yellow-mushroom", "hypno-shroom", "poison-mushroom", "angry-mushroom", "wizard-mushroom"];
// var price = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

//used to assign price -  NOT WORKING ATM
// for (var i=0; i< itemsForSale.length; i++){
//   var namePrice = itemsForSale[i];
//   var cost = price[i];
//   shoppingCart.push(namePrice, cost);
// }
//Please ignore for now



//eventListener
for (var i in itemsForSale)
  document.getElementById(itemsForSale[i]).addEventListener('click', function(event) {
    var id = event.target.id;
    var pricing = 4;
    return addItemToCart(id, pricing, 1), displayCart() ;
  }
  )

//QUESTIONS - how can I assign price and name without using event.target.id? how to calculate total?



