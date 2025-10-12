import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="item-counter" />;
});

vi.mock('./shopping-cart/itemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/itemCounter', () => ({
//     ItemCounter: (props: unknown) =>
//         <div
//             data-testid="item-counter"
//             name={props.name}
//             quantity={props.quantity}
//         />
// }));

describe('FirstSteppApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot();
    });

    test('Should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        const itemCounterElements = screen.getAllByTestId('item-counter');
        expect(itemCounterElements.length).toBe(3);
    })

    test('Should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch',
            quantity: 4,
        });

        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro controller',
            quantity: 3,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Xbox',
            quantity: 5,
        });                
    })
});