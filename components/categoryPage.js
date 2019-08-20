import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ItemCard from "./itemCard";

export default class CategoryPage extends React.Component {
    renderMenuItems = menuItems => {
        return menuItems.edges
            .filter(edge =>
                edge.node.name
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase())
            )
            .map(edge => edge.node)
            .map(menuItem => {
                return (
                    <ItemCard
                        key={menuItem.name}
                        name={menuItem.name}
                        price={menuItem.price}
                    />
                );
            });
    };

    renderSubCategories = () => {
        if (!this.props.subCategories) {
            return null;
        }
        return this.props.subCategories.edges
            .filter(edge =>
                edge.node.name
                    .toLowerCase()
                    .includes(this.props.search.toLowerCase())
            )
            .map(edge => edge.node)
            .map(subCategory => {
                return (
                    <View key={subCategory.name}>
                        <Text style={style.subCategoryHeader}>
                            {subCategory.name}
                        </Text>
                        {this.renderMenuItems(subCategory.menuItems)}
                    </View>
                );
            });
    };

    render() {
        return (
            <View>
                {this.renderMenuItems(this.props.menuItems)}
                {this.renderSubCategories()}
            </View>
        );
    }
}

const style = StyleSheet.create({
    subCategoryHeader: {
        margin: 25,
        fontSize: 25,
        fontWeight: "bold",
    },
});
