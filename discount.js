/**
 *  up to 100 --> price 100
 * more than 100- 200 --> price 90
 * more than 200 --> price 80
 * 
 * now calculate how much he will get discount or how much paid.
*/

function discountCalc(quantity){
    let price = 100;
    if (quantity <= 100 && quantity > 0){
        price = price * 1;
        totalAmount = quantity * price;
    }
    else if(quantity > 100 && quantity <= 200){
        price = price * .9;
        totalAmount = quantity * price;
    }
    else{
        price = price * 8;
        totalAmount = quantity * price;
    }
    return totalAmount;
}

const result = discountCalc(20);
console.log(result);
