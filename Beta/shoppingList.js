var shoppingList=function(List){

    var total = 0;

    List.forEach(function(item){
       total+=item.price;
    });

    return total;
};

var res = shoppingList([
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
]);

console.log(res);