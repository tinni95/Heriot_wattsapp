import React from "react";
import InfoBar from "./infoBar";
import renderer from "react-test-renderer";
const props = {
    style: {
        backgroundColor: "#E0A749",
        paddingBottom: 15,
    },
    number: "01314471135",
    openHour: 11,
    closingHour: 11,
};
describe("infoBar", () => {
    let rendered;
    beforeEach(() => {
        rendered = renderer.create(<InfoBar {...props} />);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("matches snapshot", () => {
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
