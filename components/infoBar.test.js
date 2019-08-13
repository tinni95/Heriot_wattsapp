import React from "react";
import InfoBar from "./infoBar";
import renderer from "react-test-renderer";

describe("infoBar", () => {
    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<InfoBar />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("matches snapshot", () => {
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
