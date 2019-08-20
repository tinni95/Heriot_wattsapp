import React from "react";
import { Modal } from "react-native";
import renderer from "react-test-renderer";

import PurpleSquidModal from "./purpleSquidModal";

describe("purpleSquidModal", () => {
    describe("when set not visible", () => {
        const props = {
            modalVisible: false,
        };
        let rendered;
        let modal;
        beforeEach(() => {
            rendered = renderer.create(<PurpleSquidModal {...props} />);
            modal = rendered.root.findByType(Modal);
        });
        it("renders", () => {
            expect(rendered).toBeTruthy();
        });
        it("has visibility prop to false", () => {
            expect(modal).toBeTruthy();
            expect(modal.props.visible).toEqual(false);
        });
    });
    describe("when set visible", () => {
        const props = {
            modalVisible: true,
        };
        let rendered;
        let modal;
        beforeEach(() => {
            rendered = renderer.create(<PurpleSquidModal {...props} />);
            modal = rendered.root.findByType(Modal);
        });
        it("renders", () => {
            expect(rendered).toBeTruthy();
        });
        it("has visibility prop to true", () => {
            expect(modal).toBeTruthy();
            expect(modal.props.visible).toEqual(true);
        });
    });
});
