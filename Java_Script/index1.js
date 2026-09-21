let a={
    a1:10,
    a2:20,
    a3:30
};


//Iteration
let b={};
for(let key in a){
    b[key]=a[key];
}
console.log(b);
a.a1++;
//Assign
let dest=Object.assign({},a);
console.log(dest);

//Spread
let det={...a};
console.log(det);