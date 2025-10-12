import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

vi.mock('./shopping-cart/itemCounter', () => ({
    ItemCounter: () => <div data-testid="item-counter" />
}));

describe('FirstSteppApp', () => {
    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot();

        screen.debug();
    });

    test('Should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);
        const itemCounterElements = screen.getAllByTestId('item-counter');

        expect(itemCounterElements.length).toBe(3);
        screen.debug();
    })
});