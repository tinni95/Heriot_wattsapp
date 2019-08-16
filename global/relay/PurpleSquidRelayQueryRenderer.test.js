import React from "react";
import { render } from "react-native-testing-library";
import { graphql, QueryRenderer } from "react-relay";

import PurpleSquidSpinner from "../../shared/PurpleSquidSpinner";

import environment from "./environment";
import PurpleSquidRelayQueryRenderer from "./PurpleSquidRelayQueryRenderer";
import PurpleSquidGraphQlErrorDisplay from "../../shared/PurpleSquidGraphQlErrorDisplay";

describe("PurpleSquidRelayQueryRenderer", () => {
    it("is defined", () => {
        expect(PurpleSquidRelayQueryRenderer).toBeDefined();
        expect(PurpleSquidRelayQueryRenderer).not.toEqual({});
    });

    describe("render", () => {
        describe("given some valid props", () => {
            const props = {
                render: jest.fn(),
                variables: {},
            };
            var rendered;
            beforeEach(() => {
                rendered = render(
                    <PurpleSquidRelayQueryRenderer
                        query={graphql`
                            query PurpleSquidRelayQueryRendererTestQuery {
                                clients {
                                    edges {
                                        node {
                                            name
                                        }
                                    }
                                }
                            }
                        `}
                        {...props}
                    />
                );
            });

            it("renders", () => {
                expect(rendered).toBeTruthy();
            });

            describe("QueryRenderer", () => {
                var queryRenderer;
                beforeEach(() => {
                    queryRenderer = rendered.getByType(QueryRenderer);
                });

                it("sets the query prop", () => {
                    expect(queryRenderer.props.query).toBeTruthy();
                });

                it("sets the environment prop to the relay environment", () => {
                    expect(queryRenderer.props.environment).toEqual(
                        environment
                    );
                });

                it("sets the variables from props", () => {
                    expect(queryRenderer.props.variables).toEqual(
                        props.variables
                    );
                });
            });
        });
    });

    describe("queryRender", () => {
        const props = {
            render: jest.fn(() => "component"),
        };

        var queryRender;
        beforeEach(() => {
            const component = new PurpleSquidRelayQueryRenderer(props);
            queryRender = component.queryRender;
        });

        describe("whilst the query is being processed", () => {
            const param = {
                error: null,
                retry: null,
                props: null,
            };

            it("renders a spinner", () => {
                const rendered = render(queryRender(param));

                expect(rendered.toJSON()).toBeTruthy();
                expect(rendered.getByType(PurpleSquidSpinner)).toBeTruthy();
            });
        });

        describe("when the query response is successful", () => {
            const param = {
                error: null,
                retry: jest.fn(),
                props: {},
            };

            it("invokes the supplied render method", () => {
                const result = queryRender(param);
                console.log(result);
                expect(props.render).toHaveBeenCalledWith(param);
                expect(result).toEqual(props.render());
            });
        });
    });
});
