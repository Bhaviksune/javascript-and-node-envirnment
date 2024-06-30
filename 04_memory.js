// STACK and HEAP

// Primtive datatypes store in stack 
// non primitives datatypes store in heap 


// lets Example for stack

let list1="bhavik"
let list2=list1
list2="samir"
// console.log(list1);
// console.log(list2);

//example for heap

let table1={
    age:15,
    color:"red"
}
 let table2=table1

// table2.color="pink"
// console.log(table1.color);
// console.log(table2.color);

//diagram representation 
// table2- here table1 orignal value is given a reference means original value so both table color was change
// table1
// list1
// list2 - it give a copy of upper list1 . if some changes done not impact on original so list1 value not change 
// list1