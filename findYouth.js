const age = [22, 20, 29, 33, 26, 30, 17, 25, 27];

function findYouth(age){
    let youthAge = age[0];
    for(let number of age){
        if( youthAge > number){
            youthAge = number;
        }
    }
    return youthAge;
}

const result = findYouth(age);
console.log(result);
