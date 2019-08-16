import React from "react";
import { render } from "react-native-testing-library";

import PurpleSquidGraphQlErrorDisplay from "./PurpleSquidGraphQLErrorDisplay";

describe("VuxeGraphQlErrorDisplay", () => {
    describe("with no non-default props", () => {
        it("renders successfully to match snapshot", () => {
            const rendered = render(<PurpleSquidGraphQlErrorDisplay />);
            expect(rendered.toJSON()).toBeTruthy();
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
