import React from "react";
import renderer from "react-test-renderer";
import { Route } from "react-router";
import { NativeRouter } from "react-router-native";

import Menu from "./menu";

describe("menu", () => {
    const menuItems = {
        edges: [
            {
                node: {
                    name: "a",
                },
            },
        ],
    };
    const props = {
        search: "",
        id: "1",
        categories: {
            edges: [
                {
                    node: {
                        name: "name",
                        subCategories: {
                            edges: {
                                node: {
                                    menuItems,
                                },
                            },
                        },
                        menuItems,
                    },
                },
            ],
        },
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

    it("renders 1 route element", () => {
        expect(route).toHaveLength(1);
    });
});
