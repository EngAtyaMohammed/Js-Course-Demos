function C_fun(fname,lname){
    this.firstName=fname
    this.lastName=lname 
    this.innerfun=function(){
        return this.firstName
    }
};

var attia=new C_fun('attia','moh');

console.log(attia.innerfun());

attia.innerfun=function()
{
    return  `the fistname is  ${this.firstName} 
    and the lastname is ${this.lastName}`
}
console.log(attia.innerfun());
