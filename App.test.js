import renderer from "react-test-renderer";
import React from "react";

import AppQueryRenderer from "./components/appQueryRenderer";
import App from "./App";

describe("app", () => {
    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<App />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("it renders AppQueryRenderer", () => {
        expect(rendered.root.findByType(AppQueryRenderer)).toBeTruthy();
    });
});
