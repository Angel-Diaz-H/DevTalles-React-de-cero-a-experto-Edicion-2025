import { ItemCounter } from './shopping-cart/itemCounter';

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch', quantity: 4 },
    { productName: 'Pro controller', quantity: 3 },
    { productName: 'Xbox', quantity: 5 },
];

export function FirstStepsApp() {
    return (
        <>
            {/* <h1>Hola!!!</h1>
            <p>Esto es un párrafo.</p>
            <button>Click me</button> */}

            <h1>Carrito de compras</h1>
            {/* <ItemCounter name='Nintendo Switch' quantity={3} />
            <ItemCounter name='Xbox' quantity={2} /> */}

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
        </>
    )
};