import React from "react";
import { graphql } from "react-relay";

import PurpleSquidRelayQueryRenderer from "../global/relay/PurpleSquidRelayQueryRenderer";
import environment from "../global/relay/environment";

import AppContent from "./appContent";

export default class AppQueryRenderer extends React.Component {
    render() {
        return (
            <PurpleSquidRelayQueryRenderer
                environment={environment}
                query={graphql`
                    query appQueryRendererQuery {
                        node(id: "Q2xpZW50OjE=") {
                            ... on Client {
                                restaurants {
                                    edges {
                                        node {
                                            categories {
                                                edges {
                                                    node {
                                                        name
                                                        id
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
                variables={{}}
                render={this.queryRender}
                hideSpinner={false}
            />
        );
    }

    queryRender = ({ props }) => {
        const categories = props.node.restaurants.edges[0].node.categories;
        return <AppContent categories={categories} />;
    };
}
