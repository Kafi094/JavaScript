const list=[ 'A1','A2','A3',100,200]

console.log(list[2]);

list.push('KAFI');  //  to add element in last position

list.unshift('First');   // to add element in first position

list.pop();   // to remove last element

list.shift();  // to remove first element

console.log(list);

console.log(list.indexOf('A3')); // to know the index number of element

//Array String
const myInfo=['KAFI','01751432894','Rangpur','HSTU'];

console.log(myInfo.toString());  // to Converting String

console.log( typeof myInfo.toString());

let index= myInfo.at(1);    //to get exact index value

console.log(index);

console.log(myInfo.join(" # ")); // use to specific seperator between 2 element

console.log(myInfo);

const array1=[1,2,3,4,5];
const array2=[11,22,33,44,55];

let new1 = array1.concat(array2); // adding to array
// console.log(new1);  
array1.splice(0,2); // to remove exact index to exact index

console.log(array1);