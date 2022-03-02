function C_fun(fname,lname){
    this.firstName=fname
    this.lastName=lname
};

C_fun.prototype.innerFun=function(greerings ,rNum){

    var returnVal=`the fistname is  ${attia.firstName} 
                and the lastname is ${attia.lastName}`

    if (greerings && typeof greerings == "string")
        return `${greerings} ${returnVal}`

    if (rNum && typeof rNum == 2)
    return `${rNum} ${returnVal}`

}

var attia=new C_fun('attia','moh');


console.log(attia.toString());
