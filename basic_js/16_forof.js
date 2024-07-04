// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const iterator of object) {
    
// }
//here iteration where we write i or interation or num also
//object means your varible name like array name or object name
//it directly iterate at the end of the index present here

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { //for each is more use for array specially
    //console.log(num);
}

const greetings = "Hello world!"   
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() // maps is also here and for of work better here
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map); 

for (const [key, value] of map) {
   //  console.log(key, ':-', value); //use for printing is speacial line keys and pair also
}

const myObject = {     //here not work for object printing so we have to use forin loop and forof loop for array
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
console.log(key, ':-', value); //here it not take value like keys and pair like  
    
// }