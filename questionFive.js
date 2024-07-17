let expenses = [
    {amount : 100, category : "Utilities"},
    {amount : 200, category : "Groceries"},
    {amount : 50, category : "Entertainment"},
    {amount : 700, category : "Groceries"},
    {amount : 900, category : "Groceries"},
];

const total_cost = expenses.reduce((sum, item) => {
    return sum + item.amount;
}, 0)

console.log(total_cost);