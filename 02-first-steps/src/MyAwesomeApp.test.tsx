import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react'

describe('MyAwesomeApp', () => {
    test('Should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />);
        screen.debug()

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Angel');
        expect(h3?.innerHTML).toContain('Díaz');
    });

    test('Should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp />)
        screen.debug()
        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Angel');
    });

    test('Should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

    test('Should match snapshot', () => {
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
});