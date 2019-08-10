import React from "react";
import { NativeRouter, Link } from "react-router-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Route } from "react-router";

import CategoryPage from "./categoryPage";

export default class Menu extends React.Component {
    renderRoutes = () => {
        return this.props.categories.edges
            .map(edge => edge.node)
            .map(category => {
                return (
                    <Route
                        key={category.name}
                        path={"/" + category.name}
                        render={() => (
                            <CategoryPage
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
