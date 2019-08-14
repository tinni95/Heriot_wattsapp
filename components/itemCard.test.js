import React from "react";
import renderer from "react-test-renderer";

import ItemCard from "./itemCard";

describe("itemCard", () => {
    const props = {
        price: 20,
        name: "item",
    };

    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<ItemCard {...props} />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("matches snapshot", () => {
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
