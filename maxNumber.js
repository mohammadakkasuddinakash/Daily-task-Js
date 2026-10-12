
const number1 = 12;
const number2 = 10;
const number3 = 10;

if (number1 === number2 && number2 === number3) {
    console.log("All numbers are equal");
}
else if (number1 === number2 && number1 > number3) {
    console.log("Number1 and Number2 are max and equal:", number1, number2);
}
else if (number1 === number3 && number1 > number2) {
    console.log("Number1 and Number3 are max and equal:", number1, number3);
}
else if (number2 === number3 && number2 > number1) {
    console.log("Number2 and Number3 are max and equal:", number2, number3);
}
else if (number1 > number2 && number1 > number3) {
    console.log("Number1 is max:", number1);
}
else if (number2 > number1 && number2 > number3) {
    console.log("Number2 is max:", number2);
}
else {
    console.log("Number3 is max:", number3);
}
