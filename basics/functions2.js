function calculate(...num1){  //rest operator or spread operator
    return num1
}

console.log(calculate(200,400,600))

function cart(val1,val2,...num){
    return num
}
console.log(cart(100,200,300,400,500))
//only last three are returned since 100 is stored in val1 and 200 is stored in val2
//------------------------------------------

//CALLING FUNCTIONS USING OBJECTS
const user={
    username:"anishshetty",
    vibe:"cool"

}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and vibe is ${anyobject.vibe}`);
}

handleObj(user); 
//both are syntax to print a function using objects  !!IMP
handleObj({
    username:"sam",
    vibe:"cool"
})
//-----------------------------
//funtion declaration using arrays

const newArr=[100,2000,300,400]

function
 returnSecondVal(getArr){
    return getArr[1]
 }

 console.log(returnSecondVal(newArr))
 console.log(returnSecondVal([1,2,3,4,5]))