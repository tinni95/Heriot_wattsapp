import App, { updateSearch } from "./App";
import renderer from "react-test-renderer";
import React from "react";
import { SearchBar } from "react-native-elements";

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
