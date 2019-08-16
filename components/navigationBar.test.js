import React from "react";
import { render } from "react-native-testing-library";

import NavigationElement from "./navigationElement";
import NavigationBar from "./navigationBar";

describe("NavigationBar", () => {
    const name = "starters";
    const props = {
        categories: {
            edges: [
                {
                    node: {
                        name,
                    },
                },
            ],
        },
    };

    let rendered;
    let navigationItem;
    beforeEach(() => {
        rendered = render(<NavigationBar {...props} />);
        navigationItem = rendered.getByType(NavigationElement);
    });

    it("renders", () => {
        expect(rendered).toBeDefined();
    });

    it("renders the correct navigation items", () => {
        expect(navigationItem.props.name).toEqual(name);
    });
});
