import CategoryPage from "./categoryPage";
import renderer from "react-test-renderer";
import React from "react";

const propsOne = {
    search: "",
    menuItems: {
        edges: [
            {
                node: {
                    name: "mangia",
                    price: 20,
                },
            },
            {
                node: {
                    name: "mangiaa",
                    price: 10,
                },
            },
        ],
    },
};

const propsTwo = {
    ...propsOne,
    subCategories: {
        edges: [
            {
                node: {
                    name: "Panini",
                    menuItems: {
                        edges: [
                            {
                                node: {
                                    name: "cacca",
                                    price: 20,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    },
};

const propsThree = {
    ...propsOne,
    search: "cascaca",
};

describe("categoryPage", () => {
    describe("without subCategories", () => {
        let rendered;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsOne} />);
        });
        it("renders without subcategories", () => {
            expect(rendered).toBeTruthy();
        });
    });

    describe("with subCategories", () => {
        let rendered, itemCards;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsTwo} />);
        });
        it("renders without subcategories", () => {
            expect(rendered).toBeTruthy();
        });
    });
});
