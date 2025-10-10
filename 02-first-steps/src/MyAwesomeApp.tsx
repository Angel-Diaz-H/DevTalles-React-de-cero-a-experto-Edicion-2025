import type { CSSProperties } from "react";

const myStyle: CSSProperties = {
    backgroundColor: '#c1e4c1ff',
    borderRadius: 30,
    padding: 10,
    margin: 15,
    textAlign: 'center',
}

const firstName = 'Angel';
const lastName = 'Díaz';

const favoriteGame = ['Elden Ring', 'Smash', 'Metal Gear']
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá'
};

export function MyAwesomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGame.join(', ')}</p>
            <p>2+2 = {2 + 2}</p>

            {/* No existe una representación visual de React para boolean. */}
            <h1>{isActive}</h1>
            <h1>{isActive ? 'Sí' : 'No'}</h1>

            <p style={myStyle}>
                {JSON.stringify(address)}
            </p>
        </>
    )
};