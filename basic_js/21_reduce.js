//reduce is use to add the number of all the element like facorial or we use sum in array

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {   //acc-it is accumulator we give intial in that after sum is store there at every iteration
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)                                             //at end is intial value of the aacumulator which intial at start only 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [       //use in shopkart 
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);