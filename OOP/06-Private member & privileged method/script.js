function C_fun(fname,lname){
    this.firstName=fname
    this.lastName=lname

    //private members 
     var birthdate =  '1997';

     //previlaged memper functions
    //  getter 
     this.getBirthdate=function(){
         return birthdate;
     }
    //  setter
     this.setBirthdate=function(bdate){
         birthdate=bdate;
     }

};

//instance obj
var attia=new C_fun('attia','moh');
attia.setBirthdate('1999')


console.log(attia.getBirthdate());
