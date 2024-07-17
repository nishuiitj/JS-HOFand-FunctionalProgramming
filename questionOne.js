const ordersList = [
    {name : "Laptop", price : 120000},
    {name : "Mobile", price : 70000},
    {name : "Mobile Charger", price : 1500},
    {name : "Laptop Charger", price : 10500},

];

var sum = 0;
ordersList.forEach((obj, index, arr) => {
sum += obj.price;    
});

console.log(sum);