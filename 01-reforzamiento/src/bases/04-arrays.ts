// const myArray:number[] = [
//     1, 2, 3, 4, 5, 6
// ]

// myArray.push(10);
// myArray.push(11);

// console.log(myArray);

// for (const myNumber of myArray){
//     // Esta operación dará 410 en '4' + 10
//     console.log(myNumber + 10);
// }

const myArray:number[] = [
    1, 2, 3, 4, 5, 6
]

const myArray2 = [...myArray]; // O structuredClone.

myArray2.push(7);

console.log(myArray);
console.log(myArray2);
