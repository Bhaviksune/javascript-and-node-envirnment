const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this is used in the current context
        //in function if we use only this it will give all the value in the local area
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //it give {} in  node editor if not current context is there and in brower it give window and their property to use 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //this is not work in function it work in only object
// }                               //when we accure only this in empty in fucntion so we get property like loopstart,loopexit etc

const chai =  () => { //arrow function  () => {}
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //arrow function for single print

// const addTwo = (num1, num2) => ( num1 + num2 )//other method print use()

const addTwo = (num1, num2) => ({username: "hitesh"}) //for object also we have to use in this way 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()