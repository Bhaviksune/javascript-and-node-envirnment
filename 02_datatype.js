//alert("hello") 
// it gives error here bt in browser inspect it will run becoz here javascript run by node js and in browser 
//it run by v8 engine .so here alert has different sytax here

//datatypes
let age=19 
/*
number -  2 to power 53 range
bigint -
string -
boolean -
null - standalone value // like if weather change in not so it not show zero it show null
symbol - unique //used in react more

*/
console.log(typeof age)
console.log(typeof null)// big contovery null should give value null bt it show object [error in javascript]
console.log(typeof undefined) // it show undefined imp interview question 
 // null output - object
 // undefined output - undefined



 //////data types ||||||||

 // // //type 1
// //  PRIMITIVE(call by value)

// //  7 types :- boolean,number,string,null,undefined,bigint,Symbol

// //interview answer typeof value of datatype
 
// let num=33
// console.log(typeof num);

//   let str="bhaik"
// console.log(typeof str);

// let weather=null
// console.log(typeof weather); //imp
//  //value is not zero only change in weather not there so it is used 

//  let login=false
// console.log(typeof login);

// let declared;
// console.log(typeof declared); //value not given to variable only declared

 //let id=Symbol('123')
// let Anotherid=Symbol('123')//it is unique values which are given
// console.log(id===Anotherid);
//console.log(typeof id)

// //let bigint= 19 digit value


//NON PRIMITIVE (call by reference)

//3 type=array,object,function;

// let heros=[1,9,3,2]
// console.log(typeof heros);//object
// let obj={
//     id:1,
//     name:"bhavik",
//     class:4
// }
// console.log(typeof obj); //object


// const myfunction=function(){
//     console.log("hello");
// }
// console.log(typeof myfunction); //typeof is function but it also called function object

 