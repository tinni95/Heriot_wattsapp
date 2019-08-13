import React from "react";
import Menu from "./menu";
import renderer from "react-test-renderer";
import { categories } from "../dummy";
import { NativeRouter } from "react-router-native";

props = {
    search: "",
    categories: categories.categories,
};
describe("IconItem", () => {
    let rendered;
    beforeEach(() => {
        rendered = renderer.create(
            <NativeRouter>
                <Menu {...props} />
            </NativeRouter>
        );
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });
});
