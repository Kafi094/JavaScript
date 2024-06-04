 
 // Strict
 "use strict"
 let x;
 x=100;
 console.log(x);

          // using Iterator (forEach)

 const Info = ["KAFI","RAFI","AHAD","RIKTA","NISSAN","RIMEL"]
 Info.forEach(Name)
 function Name(value,Index,Itself)
 {
    console.log(value + " "+ Index);
 }

        // Array Map

 const num = [2,4,6,8,10];
  let num2=num.map(net);
 function net(value,index,itself)
 {
         return value*5;
 }
 console.log(num2);

      // flatMap

const myArr=[1,2,3,4,5];
const newArr =  myArr.flatMap((x) => x*2);
console.log(newArr);

      // Array Fliter
    
let myFliter = [1,2,3,5,11,22,33,44,55,66];
const Fresh = myFliter.filter(fliterFun);
function fliterFun(value)
{
    return value > 5;
}
console.log(Fresh);