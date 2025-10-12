import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

// Descripción de dónde o qué queremos que se muestre
describe(add, () => {
    test('Should add two positives numbers', () => {
        // No se suele ser así:
        // if (result !== 2) {
        //     throw new Error('El resultado no es 2');
        // }

        // ! 1. Arrange.
        const a = 1;
        const b = 2;

        // ! 2. Act.
        const result = add(a, b);

        // ! 3. Assert.
        expect(result).toBe(a + b);
    });

    test('Should add two negative numbers', () => {
        // ! 1. Arrange.
        const a = -2;
        const b = -4;

        // ! 2. Act.
        const result = add(a, b);

        // ! 3. Assert.
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('Should subtract two positives numbers', () => {
        const a = 2;
        const b = 4;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });

    test('Should subtract two negative numbers', () => {
        const a = -4;
        const b = -2;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('Should multiply two positives numbers', () => {
        const a = 2;
        const b = 4;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('Should multiply two negative numbers', () => {
        const a = -4;
        const b = -2;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
});