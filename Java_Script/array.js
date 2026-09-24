// Array declaration

let numbers=[1,2,3, 4,5];
console.log(numbers);

//Insertion

//end
numbers.push(9);
console.log(numbers);

//begin
numbers.unshift(8);
console.log(numbers);

//middle
numbers.splice(2,0,'a','b','c');
console.log(numbers);

//searching

console.log(numbers.indexOf(13)); //-1 because it is not present

//Check whether number exist or not
if(numbers.indexOf('a')!=-1){
    console.log("present");
}
else{
    console.log("Absent");
}

//Array of Objects

let courses=[
    {no:1,name:'Nishu'},
    {no:2,name:'Avni'}
];
console.log(courses);

let course=courses.find(function(cse){
    return cse.name==='Nishu';
})
console.log(course);
//Minimizing the above function

let course2=courses.find(cse => cse.name==='Avni');
console.log(course2);