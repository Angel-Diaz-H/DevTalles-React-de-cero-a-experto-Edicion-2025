// Sí se puede cambiar de valor porque no es una constante.
function greet(name: string): string {
    return `Hola ${name}`
}

// No cambia lo que apunta en el objecto this.
// Cuando retorna algo se puede omitir el return.
const greet2 = (name: string) => `Hola ${name}`;


const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'ProMaster'
    };
}

// Return implícito.
const getUser2 = () => ({
        uid: 'ABC-123',
        username: 'Goku123'
    });

const user = getUser();
console.log(user.username);

const user2 = getUser2();
console.log(user2.username);

const myNumbers:number[] = [1,2,3,4,5];

// myNumbers.forEach(function(value){
//     console.log({value});
// });

// Función callback.
// Se pasa como argumento en un parámetro
// myNumbers.forEach((value) => {
//     console.log(value);
// });

// Cuando hay argumentos que van a ser usados solo para
// referencia otra función, se puede mandar
// la referencia a otra función.
myNumbers.forEach(console.log)