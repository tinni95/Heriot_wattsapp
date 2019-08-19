import TestRenderer from "react-test-renderer";

import AppContent from "./appContent";
import AppQueryRenderer from "./appQueryRenderer";

describe("AppQueryRenderer", () => {
    let component;
    beforeEach(() => {
        component = new AppQueryRenderer();
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
            const categories = {
                edges: [],
            };
            const param = {
                error: null,
                retry: jest.fn(),
                props: {
                    node: {
                        restaurants: {
                            edges: [
                                {
                                    node: {
                                        categories,
                                    },
                                },
                            ],
                        },
                    },
                },
            };

            var rendered, props;
            beforeEach(() => {
                rendered = TestRenderer.create(queryRender(param));
                props = rendered.root.props;
            });

            it("renders a AppContent", () => {
                expect(rendered.toJSON()).toBeTruthy();
                expect(rendered.getInstance()).toBeInstanceOf(AppContent);
                expect(props.categories).toEqual(categories);
            });
        });
    });
});
