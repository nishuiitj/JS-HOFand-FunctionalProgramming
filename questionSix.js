let expenses = [
    {amount : 100, category : "Utilities"},
    {amount : 200, category : "Groceries"},
    {amount : 50, category : "Entertainment"},
];

function categorizeExpense(amount){
    return amount>100 ? 'High Expense' : 'Low Expense';
}

const categorizedExpense = expenses.map((item) =>{
    return categorizeExpense(item.amount);
})

console.log("Categorized Expenses : ",categorizedExpense);