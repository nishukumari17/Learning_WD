// console.log('hello testing ');
// let a=10;
// a='Nishu';
// console.log(a);
// let ab=[1,2,3,4];
// console.log(ab[4]);
 
// let m=1;
// let n='1';
// console.log(m===n);


//Object
// let rectangle={
//     length:5,
//     breadth:10,
//     draw:function(){
//         console.log('draw is printed');
//     }
// };


//Factory function

// function computeRectangle(a,b){
//     return rectangle={
//         length:a,
//         breadth:b,
//         draw(){
//             console.log("Function is called");
//         }
//     };
// }

// let obj1=computeRectangle(5,10);



//Constructor function:follows Pascal Notation
//constructor function -props/method-> initialise/define

// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log("Function printing");
//     }
// }
//to call
// let ob1=new Rectangle(2,8);
// //add
// ob1.color='red';
// console.log(ob1);

// //delete
// delete ob1.color;
// console.log(ob1);


// //Primitive type

// let a=10;
// let b=a;
// a++;
// console.log(a); //11
// console.log(b); //10

// //Reference Type

// let a1={value:10};
// let b1=a1;
// a1.value++;
// console.log(a1.value); //11
// console.log(b1.value); //11


//For-in loop
let rectangle={
    length:5,
    breadth:10
};
for(let x in rectangle){
    console.log(x,rectangle[x]);
}