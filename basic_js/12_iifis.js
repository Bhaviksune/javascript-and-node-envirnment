// Immediately Invoked Function Expressions (IIFE)

// syntax  
//      ((){
//           console.log()
//         })('we can pass parameters'); semicolon imp 
//
//   when we write funtion name it called namediife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); //if anoeher iifi is used so we have to semicolon at the end
})();

( (name) => { //without name it is called unnmaediife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //hitesh is a parameter