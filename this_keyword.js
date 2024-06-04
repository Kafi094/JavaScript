const person = {
    firstName : "ABDUL",
    lastName  : "KAFI",
    ID        : "2102136",
    fullName  : function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());