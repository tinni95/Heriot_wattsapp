import React from "react";
import ItemCard from "./itemCard";
import renderer from "react-test-renderer";

props = {
    price: 20,
    name: "item",
};

describe("itemCard", () => {
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
