//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c =10 //it work like a global scope so  this varible is not used more
    // console.log("INNER: ", a); //local scope
    
}



// console.log(a); //globa scope
// console.log(b);
// console.log(c);


function one(){ ////function in function 
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {   //codition in condition 
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)   //call before intializze 
const addTwo = function(num){
    return num + 2
}