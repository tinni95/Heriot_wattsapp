import renderer from "react-test-renderer";
import React from "react";

import AppContent from "./appContent";
import { AppHeader } from "./appHeader";
import { AppMainContent } from "./appMainContent";

describe("appContent", () => {
    const props = {
        categories: {
            edges: [
                {
                    node: {
                        id: "1",
                        name: "Starters",
                    },
                },
            ],
        },
    };
    let rendered;
    let appHeader;
    let appMainContent;
    beforeEach(() => {
        rendered = renderer.create(<AppContent {...props} />);
        appHeader = rendered.root.findByType(AppHeader);
        appMainContent = rendered.root.findByType(AppMainContent);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("renders the right components", () => {
        expect(appHeader).toBeTruthy();
        expect(appMainContent).toBeTruthy();
    });
});
