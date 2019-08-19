import React from "react";
import { graphql } from "react-relay";
import PropTypes from "prop-types";

import PurpleSquidRelayQueryRenderer from "../global/relay/PurpleSquidRelayQueryRenderer";
import environment from "../global/relay/environment";

import CategoryPage from "./categoryPage";

export default class CategoryQueryRenderer extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired,
    };
    render() {
        return (
            <PurpleSquidRelayQueryRenderer
                environment={environment}
                variables={{ categoryId: this.props.id }}
                query={graphql`
                    query categoryQueryRendererQuery($categoryId: ID!) {
                        node(id: $categoryId) {
                            ... on Category {
                                menuItems {
                                    edges {
                                        node {
                                            name
                                        }
                                    }
                                }
                                subCategories {
                                    edges {
                                        node {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
                render={this.queryRender}
                hideSpinner={false}
            />
        );
    }

    queryRender = ({ props }) => {
        const { menuItems, subCategories } = props.node;
        return (
            <CategoryPage
                search={this.props.search}
                menuItems={menuItems}
                subCategories={subCategories}
            />
        );
    };
}
