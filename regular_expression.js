      
      //Match/search

let text = "this is a online paid course, Online class are very good"

let result = text.search("online");    // to get index number of this element
// console.log(result);

let result1 = text.search(/online/i);  //  this is regular expression (/pattern/Modifier)   Modifier holo(i,g,m)
// console.log(result1);

let result2 = text.match(/online/ig);  //  this is regular expression (/pattern/Modifier)   Modifier holo(i,g,m)

//  console.log(result2);

      //Repalce
let change = text.replace("paid" , " ");  // this is replace a keyword
// console.log(change);

let change1 = text.replace(/online/ig , "off line");    // this is regular expression
console.log(change1);