let a=[5,2,7,9,10];
console.log(a);
//Remove from end
a.pop();
console.log(a);

//Remove from beginning

a.shift();
console.log(a);

//remove from middle

a.splice(1,1);
console.log(a);


//concat
let first=[2,3,4,5,5,8];
let second=[9,6,5,3,3,2];
let combined=first.concat(second);
console.log(combined);

//slice

let sliced=combined.slice(2,7);
console.log(sliced);

//Spread Operator
let f=[1,2,3];
let s=[5,6,7];
let combine=[...f,true,'a',...s,false];
console.log(combine);

//create copy using spread operator

let copy=[...combine];
console.log(copy);

//looping or iterating the array

//using for-of
let arr=[10,20,30,40,50];
for(let item of arr){
    console.log(item);
}

//using for-each loop

arr.forEach(function(numbers){
    console.log(numbers);
})

//Minimize forEach loop
arr.forEach(number=>console.log(number));

//join
let joining=first.join(":");
console.log(joining)

//filtering arrays
let farray=[3,5,9,-3,-4,-1];
let filtered=farray.filter(num=>num>=0);
console.log(filtered);

//Mapping
let mArray=[7,8,9,10];
let mapValue=mArray.map(value=>"Strudent No " +value);
console.log(mapValue);

//Mapping with objects

let oArray=[2,5,6,-3,-5];
let fData=oArray.filter(val=> val >= 0);
let mData=fData.map(data=>({value:data}));
console.log(mData);
