export function MyAwesomeApp() {
    const firstName = 'Angel';
    const lastName = 'Díaz';

    const favoriteGame = ['Elden Ring', 'Smash', 'Metal Gear']
    const isActive = true;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canadá'
    };

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGame.join(', ')}</p>
            <p>2+2 = {2 + 2}</p>

            {/* No existe una representación visual de React para boolean. */}
            <h1>{isActive}</h1>
            <h1>{isActive ? 'Sí' : 'No'}</h1>

            <p>
                {JSON.stringify(address)}
            </p>
        </>
    )
};