// Es un molde de cómo se quiere que luzca algo.
// Es diferente a una clase.
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
};

interface Address {
    postalCode: string;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    // age: '45', // Indica error.
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
};

// const spiderman: Person = {
//     firstName: "Peter",
//     lastName: "Parker",
//     age: 0,
//     address: {
//         postalCode: "",
//         city: ""
//     }
// }

console.log(ironman);

// // spread operator
// // const spiderman = {...ironman};
// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'San José';

// console.log(ironman, spiderman);



