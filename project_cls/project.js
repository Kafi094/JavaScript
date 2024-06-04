
function myFun()
{
    let x = document.getElementById("demo").value;
    let msg = document.getElementById("Ptag");

    try{
        if(x.trim() == " ") throw "Input Feild in Empty";
        if(x<5) throw "number is too low";
        else if(x>10) throw "number is too big"
        else
        {
            throw "Everthing is Ok";
        }
    }
    catch (err)
    {
        msg.innerHTML = err;
    }
}