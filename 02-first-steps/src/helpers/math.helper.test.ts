import { expect, test } from 'vitest';
import { add } from './math.helper';

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