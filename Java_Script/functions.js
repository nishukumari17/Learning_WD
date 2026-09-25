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

//Getter and setter

let person={
    fname:'Nishu',
    lname:'Kumari',
    //getter function
    get fullName(){
        return `${person.fname}  ${person.lname}`
    },
    set fullName(value){
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
}

//to call getter
console.log(person.fullName);

//to call setter
person.fullName="Avni Singh";
console.log(person.fullName);

//Reduce Method

let red=[1,2,3,4,5];
let redSum=red.reduce((accumulator,currentValue)=>accumulator+currentValue);

console.log(redSum);
