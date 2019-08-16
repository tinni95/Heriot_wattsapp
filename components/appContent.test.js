import renderer from "react-test-renderer";
import React from "react";

import AppContent from "./appContent";

describe("appContent", () => {
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
    beforeEach(() => {
        rendered = renderer.create(<AppContent {...props} />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("it matches Snapshot", () => {
        const snapshottable = rendered.toJSON();
        expect(snapshottable).toMatchSnapshot();
    });
});
