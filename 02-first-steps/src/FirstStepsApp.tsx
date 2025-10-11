import { ItemCounter } from './shopping-cart/itemCounter';

export function FirstStepsApp() {
    return (
        <>
            {/* <h1>Hola!!!</h1>
        <p>Esto es un párrafo.</p>
        <button>Click me</button> */}

            <h1>Carrito de compras</h1>
            <ItemCounter name='Nintendo Switch' quantity={3} />
            <ItemCounter name='Xbox' quantity={2} />
        </>
    )
};