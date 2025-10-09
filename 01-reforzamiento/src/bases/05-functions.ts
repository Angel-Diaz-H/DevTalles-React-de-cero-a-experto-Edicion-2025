// Sí se puede cambiar de valor porque no es una constante.
function greet(name: string):string {
    return `Hola ${name}`
}

// No cambio lo que apunta en el objecto this.
const greet2 = (name: string):string => {
    return `Hola ${name}`;
}

const message = greet('Goku');
const message2 = greet('Vegeta');

console.log(message, message2);


function getUser(){
    return {
        uid: 'ABC-123',
        username: 'Goku123'
    };
}

const getUser2 = () => {
    return {
        uid: 'ABC-123',
        username: 'Goku123'
    };
};

const user = getUser();
console.log(user.username);

const user2 = getUser2();
console.log(user2.username);