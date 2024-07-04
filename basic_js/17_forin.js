//syntax 

// for (const key in object) {  //same as forof  only it comfortable with more object
     
//     }
// }

const myObject = { // for in is more use for object printning
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const i in myObject) {
   // console.log(`${i} shortcut is for ${myObject[i]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);  //here array also print as normal it print
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
 console.log(key);  //here map is not print there are different option so in forof object not print and here map is not print
// }