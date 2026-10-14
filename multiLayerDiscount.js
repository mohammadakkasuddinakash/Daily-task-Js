/**
 * quantity up to 100 --> price 100 
 * quantity 101-200 --> price 90 
 * quantity up to 200 --> price 80 
 */
function discountCalc(quantity){
    const quantBellow100price = 100;
    const quantityBellow200Price = 90;
    const quantityUpTO200Price = 80;
    let total = 0;

    if(quantity <= 100){
        total = quantBellow100price * quantity;
    }
    else if(quantity <= 200){
        const first100price = quantBellow100price * 100;
        const remainingQuantity = quantity - 100;
        const remainingQuantityPrice = remainingQuantity * quantityBellow200Price;
        total = first100price + remainingQuantityPrice;
    }
    else{
        const first100price = quantBellow100price * 100;
        const secondbellow200 = quantityBellow200Price * 100;
        const remainingQuantity = quantity - 200;
        const remainingQuantityPrice = remainingQuantity * quantityUpTO200Price;
        total = first100price + secondbellow200 +  remainingQuantityPrice;

    }
    return total;
}

const result = discountCalc(250);
console.log(result);
