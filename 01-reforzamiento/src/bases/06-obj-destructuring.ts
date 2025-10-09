const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const name =  person.name;
// const age = person.age;
// const key = person.key;

const { name: ironManName, age, key } = person;

console.log({ironManName, age, key});


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
};

const useContext = ({key, name, age, rank = 'Sin rango'}: Hero) => {
    // Se puede desestructurar aquí si son más de 3.
    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank,
    };
};

const {keyName, rank, user: {name}} = useContext(person);
console.log(keyName, rank, name);