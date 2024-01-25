
//var c=300;    //global scope
let a=200
if(true){ 
let a = 10;
const b = 20;
//var c = 30;     //block scope
}

//nested scope
 function one(){
    const username= "anish"

    function two(){
        const website="github"
        console.log(username)
    }
    //console.log(website)

    two();   //yeh hoga run
 }

 one();   //yeh access hi nahi hoga 
