/**
 * Shop / store calculator
 * product price :
 *                Shirt price --> 500 tk
 *                Pant price --> 600 tk
 *                Shoe price --> 900 tk
 * Now calculate with quantity. Return total amount;
*/

function shopCal(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 600;
    const perShoePrice = 900;

    const forShirtprice = perShirtPrice * shirtQuantity;
    const forPantPrice = perPantPrice * pantQuantity;
    const forShowPrice = perShoePrice * shoeQuantity;

    const totalAmount = forShirtprice + forPantPrice + forShowPrice;

    return totalAmount;
}

const result = shopCal(2, 0, 0);
console.log(result);