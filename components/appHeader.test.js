import renderer from "react-test-renderer";
import React from "react";

import { AppHeader } from "./appHeader";
import InfoBar from "./infoBar";
import NavigationBar from "./navigationBar";

describe("appHeader", () => {
    const props = {
        categories: {
            edges: [
                {
                    node: {
                        name: "Starters",
                    },
                },
            ],
        },
    };
    let rendered;
    let infoBar;
    let navigationBar;
    beforeEach(() => {
        rendered = renderer.create(<AppHeader {...props} />);
        infoBar = rendered.root.findByType(InfoBar);
        navigationBar = rendered.root.findByType(NavigationBar);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("renders the right components", () => {
        expect(infoBar).toBeTruthy();
        expect(navigationBar).toBeTruthy();
    });
});
