const characterNames = [
    'Goku', 'Vegeta', 'Trunks'
];

// Aquí es desestructuración de arreglos.
// Se asignan por orden.
/* const [p1, p2, p3] = characterNames;
console.log(p1, p2, p3); */

// Solo el tercer elemento.
const [, , p3] = characterNames;
console.log(p3);

// Valores de funciones.
const returnsArrayFn = () => {
    return['ABC', 123] as const; // Siempre tendrá un valor.
};

const[letters, numbers] = returnsArrayFn();

console.log(letters, numbers);