// ### Task: Expense Calculator ❤️
// Create an array of objects containing 3 flowers and 2 books. Each object should have a `name` and `price` property. Calculate and display the total amount spent on the date.

const products = [
    { name: "Rose", price: 50 },
    { name: "Tulip", price: 80 },
    { name: "Sunflower", price: 100 },
    { name: "JavaScript Basics", price: 350 },
    { name: "Clean Code", price: 500 }
];

function expenseCalc(products){
    let total = 0;
    for(let product of products){
        total = total + product.price;
    }
    return total;
}

const totalExpense = expenseCalc(products);
console.log(totalExpense);