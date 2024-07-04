//syntax

// array.forEach( (element) {    //array - arrayname, element-any value varible name like i,item or etc 
    
// });

// arrayname.forEach( (item  index, arrayname) {    //it has three value we can take iten,index,and totalarray
    
// });

const coding = ["js", "ruby", "java", "python", "cpp"] //normal printing array 

// coding.forEach( function (val){
//     console.log(val); //we have to provide varible as a refrence
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> { //by using arrow function
//     console.log(item, index, arr);     //example of geting three values
// } )

const myCoding = [                //complex array containing object print easy by the help of foreach
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);  //print specific pair values
} )