import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

describe('FirstSteppApp', () => {
    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot();

        screen.debug();
    });
});