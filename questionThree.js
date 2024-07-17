let expenses = [
    {amount : 100, category : "Utilities"},
    {amount : 200, category : "Groceries"},
    {amount : 50, category : "Entertainment"},
]

const Tax = expenses.map((item) => {
    return item.amount/10;
})

console.log(Tax);