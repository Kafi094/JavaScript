   
   // for loop

for(let i=0; i<=3; i++)
    {
        console.log("Hi");
    }

    //for in loop

const person = {
    Name : "KAFI",
    Phn : "01751432894",
    age : "18",
    gender : "Male"

}
let storage = "";
for(let prop in person)
    {
        // storage += prop + "\n";
        storage += person[prop] + "\n";
    }
    console.log(storage);
 
 // for of loop

 const arr = ["KAFI","RAFI","RAFIUL","RIFAT","1000"]
 for(let i of arr)
    {
        console.log(i);
    }

   // While loop
   
let cnt=0;
while(cnt <=5)
    {
        console.log(cnt);
        cnt++;
    }
