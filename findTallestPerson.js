function tallestPerson(height){
    let max = 0;
    for(let num of height){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const height = [120, 156, 170, 150, 166, 152, 164, 156];
const result = tallestPerson(height)
console.log(result);