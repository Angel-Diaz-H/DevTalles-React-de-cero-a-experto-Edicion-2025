import { heroes, type Hero, Owner } from '../data/heroes.data';

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    // if(!hero){
    //     throw new Error(`Error hero not found ${id}`);
    // }

    return hero;
};

console.log(getHeroById(1));

export const getHeroesByOwner = (Owner: Owner): Hero[] => {
        const listHeroes = heroes.filter((hero) => {
            return hero.owner === Owner;
        });

        return listHeroes;
};

/* Alternativa:
export const getHeroesByOwner = (Owner: Owner): Hero[] =>
    heroes.filter((hero) => hero.owner === Owner);
*/