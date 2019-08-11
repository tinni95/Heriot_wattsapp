import React from "react";
import { StyleSheet } from "react-native";
import { Route } from "react-router";

import CategoryPage from "./categoryPage";

export default class Menu extends React.Component {
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

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        height: 100,
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
});
