import renderer from "react-test-renderer";
import React from "react";
import { SearchBar } from "react-native-elements";
import { NativeRouter } from "react-router-native";

import { AppMainContent } from "./appMainContent";
import Menu from "./menu";

describe("appMainContent", () => {
    const props = {
        search: "dasd",
        categories: {
            edges: [
                {
                    node: {
                        name: "Starters",
                        menuItems: {
                            edges: [
                                {
                                    node: {
                                        name: "mangia",
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    };
    let rendered;
    let searchBar;
    let menu;
    beforeEach(() => {
        rendered = renderer.create(
            <NativeRouter>
                <AppMainContent {...props} />
            </NativeRouter>
        );
        searchBar = rendered.root.findByType(SearchBar);
        menu = rendered.root.findByType(Menu);
    });

    it("renders", () => {
        expect(rendered).toBeTruthy();
    });

    it("renders the right components", () => {
        expect(searchBar).toBeTruthy();
        expect(menu).toBeTruthy();
    });
});
