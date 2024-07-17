let expenses = [
    {amount : 100, category : "Utilities"},
    {amount : 200, category : "Groceries"},
    {amount : 50, category : "Entertainment"},
    {amount : 700, category : "Groceries"},
    {amount : 900, category : "Groceries"},
];

const Grocery = expenses.filter((item) => {
    return item.category=='Groceries';
})

console.log(Grocery);