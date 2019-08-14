import React from "react";
import renderer from "react-test-renderer";
import { Route } from "react-router";
import { NativeRouter } from "react-router-native";

import { categories } from "../dummy";

import Menu from "./menu";

describe("menu", () => {
    const props = {
        search: "",
        categories: categories.categories,
    };
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
