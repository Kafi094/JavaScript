let age=18;
if(age>=18)
    {
        console.log("You are young");
    }
else
{
    console.log("Child");
}

// nasted if stamennt
let age1 = 18;
let desh = "Bangladesh";
if( desh == "Bangladesh")
    {
        if(age1>=18)
            {
                console.log("You can Drive");
            }
        else
            {
                console.log("You can't");
            }
    }

    //using && operator

    if( desh == "Bangladesh" && age1>=18)
        {
            console.log("You can Drive the car");
        }
    else
        {
            console.log("Can't");
        }

// if - else if
let a=10;
let b=10;
let c=10;
 if(a>b && a>c)
    {
        console.log("a is the biggest number of these");
    }
else if(b>a && b>c)
    {
        console.log("b is the biggest number of these");
    }
else if(c>a && c>b)
    {
        console.log("c is the biggest number of these");
    }
else if(a=b && b==c)
    {
        console.log("Same");
    }  

    // ternary Operator
    let age2 =16;
    let msg= age2>=17 ? " You are welcome " : "Leave";
    console.log(msg);


    // Switch

    let day=1;
    let dayName;
    switch(day)
    {
        case 1:
            dayName="Saturday";
            break
        case 2:
            dayName="Sunday";
            break
        case 3:
            dayName="Monday";
            break
        case 4:
            dayName="Tuesday";
            break
        case 5:
            dayName="Wednessday";
            break
        case 6:
            dayName="Thusday";
            break
        default:
            dayName="Friday";
            break
    }
    console.log(dayName);