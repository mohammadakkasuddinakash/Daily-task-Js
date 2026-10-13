
const phones =[
    {Name : "Samsung", Price : 22000, Camera: '10px' , Color : "Blue"},
    {Name : "Nokia", Price : 25000, Camera: '7px' , Color : "Gray"},
    {Name : "Lenevo", Price : 21000, Camera: '6px' , Color : "white"},
    {Name : "Oneplus", Price : 30000, Camera: '12px' , Color : "Black"},
    {Name : "iPhone", Price : 35000, Camera: '11px' , Color : "Black"},
    {Name : "KingStar", Price : 3000, Camera: '2px' , Color : "Dark Orange"},
    {Name : "Samphony", Price : 72000, Camera: '4px' , Color : "Black"}
];

function lowestPrice(phones) {
    let min = phones [0];

    for(let phone of phones){
        if(phone.Price < min.Price){
            min = phone;
        }

    }
    return min;
}

const result = lowestPrice(phones);
console.log(result);
