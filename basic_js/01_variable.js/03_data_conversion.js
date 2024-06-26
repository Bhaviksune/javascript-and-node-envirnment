let number =33
let string ="bhavik"
//console.log(typeof number) // type1 to write console log
//console.log(typeof(number))// type2 to write console log
//console.log([number,string]) // type 3 for multiple values

let numberToString=String(number) //
//console.log(typeof numberToString)

let letter ="33abs"
let stringToNumber=Number(letter)
//console.log(stringToNumber)


let empty=null
let nullToNumber=Number(empty)
//console.log(nullToNumber)

let noValue=undefined
let undefinedToNumber=Number(noValue)
//console.log(undefinedToNumber)

let real=true
let booleanToNumber=Number(real)
//console.log(booleanToNumber);

let wrong=""
let booleanToString=String(wrong)
//console.log(booleanToString);


// operation performed 

let a = 4
let val = -a
//console.log(val);

//console.log(2**3); //2 power of 3

let str1="bhavik"
let str2="sune"
let str3=str1+str2
//console.log(str3);

//some different answer is given by this and it start thedo operation from the left to right side of the code
// console.log("2"+3);
// console.log("2" +3 +"2");
// console.log("2" +3 +2);
// console.log(2 +3 +"2"); 

// console.log(+true);
// console.log(+"");


/**********relation Comparision **********/

// console.log(null > 0);
// console.log(null == 0); 
// console.log(null >= 0);

//here in equality and relation function work diiferently
//in realtion it convert null to zero and them compare
// so null >= 0 is true and null==0 is false

// console.log(undefined > 0);
// console.log(undefined == 0); 
// console.log(undefined >= 0);
//this all gives false
// MAIN POINTS avoid this type conversion 

//Strict rule
//console.log("2"===2); //check valur with datatype


