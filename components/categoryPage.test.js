import CategoryPage from "./categoryPage";
import renderer from "react-test-renderer";
import React from "react";
import ItemCard from "./itemCard";

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
    search: "mangiaa",
};

const propsFour = {
    ...propsOne,
    search: "mangia",
};

const propsFive = {
    ...propsOne,
    search: "dasofzjci0acj",
};

describe("categoryPage", () => {
    describe("without subCategories", () => {
        let rendered, items;

        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsOne} />);
            items = rendered.root.findAllByType(ItemCard);
        });

        it("renders two item cards", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(2);
        });
    });

    describe("with subCategories", () => {
        let rendered;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsTwo} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("renders three item cards", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(3);
        });
    });

    describe("the search function", () => {
        let rendered;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsThree} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("matches one element", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(1);
        });
    });

    describe("the search function", () => {
        let rendered;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsFour} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("matches two elements", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(2);
        });
    });

    describe("the search function", () => {
        let rendered;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsFive} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("matches zero elements", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(0);
        });
    });
});
