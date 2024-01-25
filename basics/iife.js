//IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function protein(){
    //named iife
    console.log(`complete protein intake`)
})();                                           //; imp

//global scope se pollution hoti hai kai baar, toh usse hatane iife ka use karte hai ()()

(() => {
    console.log(`DB connected`)
})();

( (name) => {
    console.log(`kya bolte ${name} bhai`);
} )('ashish')                                  //iife mai arguements aise declare hote hai dusre round bracket mai
