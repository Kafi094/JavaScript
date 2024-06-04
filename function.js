   // First Funtion

function firstFun(a,b,c)
{
    console.log(a,b,c);
}
firstFun("KAFI","RAFI","AHAD");

  // Returning Value

  function add(a,b)
  {
    return a+b;
  }
    let res=add(40,50);
    console.log(res);

    // Function of First Class Citizens

    function get(a,b)
    {
        return a+b;
    }
    let sum= get;
    console.log(get(20,30));
    //or
    console.log(sum(40,30));

    //Nested function

    function Kafi(a)
    {
        function Rafi(b)
        {
            function Rikta(c)
            {
                console.log(a+b+c);
            }
            Rikta(10);
        }
        Rafi(20);
    }
    Kafi(30);

    //function as a perameter

    function suma(a,b)
    {
         return a+b;
    }
    let total=suma;
    function count(a,b,fun)
    {
        return fun(a,b)*5;
    }
    let result = count(3,4,total);
    console.log(result);

    // Anomynous Function

    ( function ()
    {
        console.log("KAFI");
    } ) ()
    let y= function(a,b){ return a+b}
    console.log(y(20,30));

    //pass by value

    function A(a)
    {
        return a= a*a;
    }
    let b=10;
    let Mul= A(b);
    console.log(Mul);

    // pass by value of reference value

    let person = {
         name : "KAFI",
         age : 22
    }
    function increase (obj)
    {
        obj.age +=1;
    }
    increase(person);
    console.log(person.age);

    // Recursion in JavaScript
    function Recursion( a)
    {
        if(a==0) return;
        console.log(a);
        Recursion(a-1);
    }
    Recursion(5);