import React from "react";
import IconItem from "./iconItem";
import renderer from "react-test-renderer";

props = {
    color: "blue",
    name: "ios-pin",
    text: "hello",
};

describe("IconItem", () => {
    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<IconItem {...props} />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });
});
