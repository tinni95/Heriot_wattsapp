import TestRenderer from "react-test-renderer";

import CategoryPage from "./categoryPage";
import CategoryQueryRenderer from "./categoryQueryRenderer";

describe("CategoryQueryRenderer", () => {
    let component;
    const props = {
        id: "1",
        search: "dasdsad",
    };
    beforeEach(() => {
        component = new CategoryQueryRenderer(props);
    });

    it("is defined", () => {
        expect(component).toBeDefined();
    });
    describe("QueryRender", () => {
        var queryRender;
        beforeEach(() => {
            queryRender = component.queryRender;
        });
        describe("when the query response is successful", () => {
            const wedges = {
                edges: [],
            };
            const param = {
                error: null,
                retry: jest.fn(),
                props: {
                    node: {
                        menuItems: wedges,
                        subCategories: wedges,
                    },
                },
            };

            var rendered, props;
            beforeEach(() => {
                rendered = TestRenderer.create(queryRender(param));
                props = rendered.root.props;
            });

            it("renders a CategoryQueryRenderer", () => {
                expect(rendered.toJSON()).toBeTruthy();
                expect(rendered.getInstance()).toBeInstanceOf(CategoryPage);
                expect(props.menuItems).toEqual(wedges);
            });
        });
    });
});
