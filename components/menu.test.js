import React from "react";
import Menu from "./menu";
import renderer from "react-test-renderer";
import { Route } from "react-router";
import { categories } from "../dummy";
import { NativeRouter } from "react-router-native";

props = {
    search: "",
    categories: categories.categories,
};

describe("IconItem", () => {
    let rendered, route;
    beforeEach(() => {
        rendered = renderer.create(
            <NativeRouter>
                <Menu {...props} />
            </NativeRouter>
        );
        route = rendered.root.findAllByType(Route);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("renders 4 route elements", () => {
        expect(route).toHaveLength(4);
    });
});
