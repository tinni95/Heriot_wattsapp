import renderer from "react-test-renderer";
import React from "react";

import CategoryPage from "./categoryPage";
import ItemCard from "./itemCard";

describe("categoryPage", () => {
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

    describe("without subCategories", () => {
        let rendered;
        let items;

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
                                            name: "Ham and sausage",
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
        let rendered;
        let items;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsTwo} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("renders three item cards", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(3);
        });
    });

    describe("the search function, with search matching one element", () => {
        const propsThree = {
            ...propsOne,
            search: "mangiaa",
        };
        let rendered;
        let items;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsThree} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("matches one element", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(1);
        });
    });

    describe("the search function, with search matching two elements", () => {
        const propsFour = {
            ...propsOne,
            search: "mangia",
        };
        let rendered;
        let items;
        beforeEach(() => {
            rendered = renderer.create(<CategoryPage {...propsFour} />);
            items = rendered.root.findAllByType(ItemCard);
        });
        it("matches two elements", () => {
            expect(rendered).toBeTruthy();
            expect(items).toHaveLength(2);
        });
    });

    describe("the search function, with search matching no elements", () => {
        const propsFive = {
            ...propsOne,
            search: "dasofzjci0acj",
        };
        let rendered;
        let items;
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
