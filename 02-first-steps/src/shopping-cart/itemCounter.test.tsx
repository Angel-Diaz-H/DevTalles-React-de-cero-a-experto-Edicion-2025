import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./itemCounter";

describe('ItemCounter', () => {
    test('Should render with default values', () => {
        const name = 'Test item';
        render(<ItemCounter name={name} />)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('Should render with custom quantity', () => {
        const name = 'Control de nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />)

        // Aquí hace la conversión de number a string.
        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('Should increase count when +1 button is clicked', () => {
        render(<ItemCounter name='Test item' quantity={1} />)
        const [buttonAdd] = screen.getAllByRole('button');
        console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    });

    test('Should decrease count when -1 button is clicked', () => {
        render(<ItemCounter name='Test item' quantity={5} />)
        const [, buttonSubtract] = screen.getAllByRole('button');
        console.log(buttonSubtract.innerHTML);

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('Should not decrease count when -1 button is clicked and quantity is 1', () => {
        render(<ItemCounter name='Test item' quantity={1} />)
        const [, buttonSubtract] = screen.getAllByRole('button');
        console.log(buttonSubtract.innerHTML);

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();
    });
});