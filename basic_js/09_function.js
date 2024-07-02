
function sayMyName(){ //normal syntax of function 
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){  // here number1,number2 is the parameter 

//     console.log(number1 + number2);
// }
//addTwoNumbers(3,4) //this is a arguments

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 //return direct result wihtout use of variaables
}
function addTwoNumbers(number1=10){ //default value if any value not pass in argument so default value is print
   // console.log(number1)
}
//if parameter does not pass then it give undefined value

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`          //pass object in different style with the sentence
}

// console.log(loginUserMessage("hitesh")) /direct print function vlaue using console .log
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // if (...num1) ... it called rest and spread accoding the condition there
    return num1                                  //here ...num1 means any no pf value is print in the function it use in addlist card prject
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //ppass object in function
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); //pasa array in the fucntion 
console.log(returnSecondValue([200, 400, 500, 1000])); //console direct value from the function 