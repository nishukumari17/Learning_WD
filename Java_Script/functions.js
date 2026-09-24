//Arguments(objects)

function sum(){
    let total=0;
    for(let value of arguments)
        total+=value;
    return total;
}
let data=sum(2,4,5,6,9);
console.log(data);

//rest parameter   (...)
function tot(numi,num2,...nums){
    console.log(nums);
}
tot(3,4,6,7,8,9,);

//Default Parameter

function intrest(p,r=5,t=5){
    return p*r*t/100;
}
console.log(intrest(1000));