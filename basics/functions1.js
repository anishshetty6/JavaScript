function name(){
    console.log("A");    
    console.log("A");
    console.log("A");
    console.log("A");
}

/* function addTwoNums(num1,num2){   //parameters
    console.log(num1+num2)
} */

function addTwoNums(num1,num2){

    // let res=num1+num2;  // lenghtier way
    // return res

    return num1+num2;
}

addTwoNums(3,4)                  //arguements
//addTwoNums(3,"4")
//addTwoNums(3,null)

const res=addTwoNums(10,20)
console.log("Result:",res); // the  result is undefined if the above commented func is used

//---------------------------------------------

function loginUserMes(username="user"){  //the "user" is a default value incase the arguement is undefined, so if loop is skipped
    if(username===undefined){      //if condn can also be written as (!username)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMes("ARj"))
//if no value is passed terminal wil show undefined