import React from "react";
import renderer from "react-test-renderer";

import IconItem from "./iconItem";

describe("IconItem", () => {
    const props = {
        color: "blue",
        name: "ios-pin",
        text: "hello",
    };

    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<IconItem {...props} />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("matches snapshot", () => {
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
