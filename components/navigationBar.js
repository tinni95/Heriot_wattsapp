import React from "react";
import { NativeRouter, Link } from "react-router-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Route } from "react-router";

import CategoryPage from "./categoryPage";

export default class NavigationBar extends React.Component {
    renderNavBar = () => {
        return this.props.categories.edges
            .map(edge => edge.node)
            .map(category => {
                return (
                    <View key={category.name}>
                        <Link
                            to={"/" + category.name}
                            underlayColor="#f0f4f7"
                            style={styles.navItem}
                        >
                            <Text>{category.name}</Text>
                        </Link>
                    </View>
                );
            });
    };

    renderRoutes = () => {
        return this.props.categories.edges
            .map(edge => edge.node)
            .map(category => {
                return (
                    <Route
                        key={category.name}
                        path={"/" + category.name}
                        render={() => (
                            <CategoryPage menuItems={category.menuItems} />
                        )}
                    />
                );
            });
    };

    render() {
        return (
            <NativeRouter>
                <ScrollView horizontal={true} style={styles.container}>
                    {this.renderNavBar()}
                </ScrollView>
                {this.renderRoutes()}
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
});
