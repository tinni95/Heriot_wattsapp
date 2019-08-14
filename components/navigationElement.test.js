import React from "react";
import renderer from "react-test-renderer";
import { NativeRouter, Link } from "react-router-native";

import NavigationElement from "./navigationElement";

describe("navigationElement", () => {
    describe("if it's the first element (home)", () => {
        const props = {
            index: 0,
            name: "Home",
        };
        let rendered, link;
        beforeEach(() => {
            rendered = renderer.create(
                <NativeRouter>
                    <NavigationElement {...props} />
                </NativeRouter>
            );
            link = rendered.root.findByType(Link);
        });

        it("renders", () => {
            expect(rendered).toBeTruthy();
        });

        it("has route equal to /", () => {
            expect(link).toBeTruthy();
            expect(link.props.to).toEqual("/");
        });
    });

    describe("if it's not the first element", () => {
        const props = {
            index: 1,
            name: "categoryName",
        };
        let rendered, link;
        beforeEach(() => {
            rendered = renderer.create(
                <NativeRouter>
                    <NavigationElement {...props} />
                </NativeRouter>
            );
            link = rendered.root.findByType(Link);
        });

        it("renders", () => {
            expect(rendered).toBeTruthy();
        });

        it("has route equal to /name", () => {
            expect(link).toBeTruthy();
            expect(link.props.to).toEqual("/" + props.name);
        });
    });
});
