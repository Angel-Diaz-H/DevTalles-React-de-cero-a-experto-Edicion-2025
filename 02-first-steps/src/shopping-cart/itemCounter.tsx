interface Props {
    name: string;
    quantity?: number; //? para opcional
    // quantity: number | undefined; // también así
};

// Desestructuración
export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            margin: 10,
        }}>
            <span
                style={{
                    width: 150
                }}
            >{name}</span>

            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    );
};