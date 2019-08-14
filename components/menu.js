import React from "react";
import { Route } from "react-router";
import PropTypes from "prop-types";

import CategoryPage from "./categoryPage";

export default class Menu extends React.Component {
    static propTypes = {
        categories: PropTypes.object.isRequired,
        search: PropTypes.string.isRequired,
    };

    renderRoutes = () => {
        let route;
        return this.props.categories.edges
            .map(edge => edge.node)
            .map((category, index) => {
                route = index == 0 ? "/" : "/" + category.name;
                return (
                    <Route
                        exact
                        key={category.name}
                        path={route}
                        render={() => (
                            <CategoryPage
                                search={this.props.search}
                                menuItems={category.menuItems}
                                subCategories={category.subCategories}
                            />
                        )}
                    />
                );
            });
    };

    render() {
        return this.renderRoutes();
    }
}
