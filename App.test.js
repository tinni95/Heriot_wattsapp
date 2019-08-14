import renderer from "react-test-renderer";
import React from "react";

import App from "./App";

describe("app", () => {
    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<App />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("it matches Snapshot", () => {
        const snapshottable = rendered.toJSON();
        expect(snapshottable).toMatchSnapshot();
    });
});
