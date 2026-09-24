// let a={
//     a1:10,
//     a2:20,
//     a3:30
// };


// //Iteration
// let b={};
// for(let key in a){
//     b[key]=a[key];
// }
// console.log(b);
// a.a1++;
// //Assign
// let dest=Object.assign({},a);
// console.log(dest);

// //Spread
// let det={...a};
// console.log(det);


//Predefined Methods

const name=new String("Nishu");
let lname='Kumari';
// convert primitive into object
lname=new String(lname);

let message=`Trying
 to study
  hard`;
//   console.log(message) 

let mail=`
To,
   ${name} Kumari
    Subject: Application for leave;


    Regards,
    Nishu

`
console.log(mail);


//Date
let date=new Date();
console.log(date);