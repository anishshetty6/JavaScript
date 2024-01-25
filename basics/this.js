const user={
    username:"max",
    price:100,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`)   //current context
        console.log(this)
    }
}
user.username="sam"
user.welcomeMsg()
console.log(this)    //refers to node environment which is empty

const chai=function(){
    let user="anish"
    console.log(this)
}

function green(){
    console.log(this)
}

green()
