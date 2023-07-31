import {render, screen} from "@testing-library/react";
import Button from "./Button.tsx";
import {expect} from "vitest";

describe("Button", () => {
    it("sample test", () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
})