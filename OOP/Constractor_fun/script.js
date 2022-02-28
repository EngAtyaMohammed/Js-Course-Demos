function C_fun(fname,lname){
    this.firstName=fname
    this.lastName=lname
    this.inner_fun=function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var john=new C_fun('attia','moh');

console.log(john);
