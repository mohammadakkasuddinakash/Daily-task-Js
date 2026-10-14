// ### Task: Product Price Calculator

// Create an array of 5 random products. Each product must have a `name`, `price`, and `quantity` property. Calculate and display the total price of all products based on their quantities.

const products = [
    { name: "Laptop", price: 55000, quantity: 2 },
    { name: "Headphone", price: 1500, quantity: 3 },
    { name: "Keyboard", price: 1200, quantity: 2 },
    { name: "Mouse", price: 800, quantity: 4 },
    { name: "Monitor", price: 12000, quantity: 1 }
];

function calculatePrice(product){
    let total = 0;
    for(let product of products){
        let productprice = product.price * product.quantity;
        total = total + productprice;
    }
    return total;
}

const result = calculatePrice(products);
console.log(result);
