function C_fun(fname,lname){
    this.firstName=fname
    this.lastName=lname
    this.inner_fun=getFullName;
};

// this is a sherd function 
// it does make some issue here 
// it's make a copy in everytime we defind an instans
var getFullName= function() {
    return this.firstName + ' ' + this.lastName;
}

//improv it from make it as a property using prototype property
//we should to do it with prototype property  
// ...why ... cause make sure it doesn't make a copy within making an any instance just take the proto obj with it  

C_fun.prototype.getFirstName=function() {
    return this.firstName ;
}

var attia=new C_fun('attia','moh');

console.log(attia);
