import React from "react";
import { render } from "react-native-testing-library";

import { main } from "../constants/colors";

import PurpleSquidSpinner from "./PurpleSquidSpinner";

describe("PurpleSquidSpinner", () => {
    describe("with no non-default props", () => {
        it("renders successfully to match snapshot", () => {
            const rendered = render(<PurpleSquidSpinner />);
            expect(rendered.toJSON()).toBeTruthy();
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });

    describe("with a different color prop", () => {
        it("renders successfully to match snapshot", () => {
            const rendered = render(<PurpleSquidSpinner color={main} />);
            expect(rendered.toJSON()).toBeTruthy();
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
