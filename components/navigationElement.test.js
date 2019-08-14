import React from "react";
import NavigationElement from "./navigationElement";
import renderer from "react-test-renderer";
import { NativeRouter, Link } from "react-router-native";

props = {
    index: 0,
    name: "Home",
};
props2 = {
    index: 1,
    name: "categoryName",
};

describe("navigationElement", () => {
    describe("if it's the first element (home)", () => {
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
        let rendered, link;
        beforeEach(() => {
            rendered = renderer.create(
                <NativeRouter>
                    <NavigationElement {...props2} />
                </NativeRouter>
            );
            link = rendered.root.findByType(Link);
        });

        it("renders", () => {
            expect(rendered).toBeTruthy();
        });

        it("has route equal to /name", () => {
            expect(link).toBeTruthy();
            expect(link.props.to).toEqual("/" + props2.name);
        });
    });
});
