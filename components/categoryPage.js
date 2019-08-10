import React from "react";
import { Text, View } from "react-native";

import ItemCard from "./itemCard";

export default class CategoryPage extends React.Component {
    renderMenuItems = menuItems => {
        return menuItems.edges
            .map(edge => edge.node)
            .map(menuItem => {
                return <ItemCard key={menuItem.name} name={menuItem.name} />;
            });
    };

    renderSubCategories = () => {
        if (!this.props.subCategories) {
            return null;
        }
        return this.props.subCategories.edges
            .map(edge => edge.node)
            .map(subCategory => {
                return (
                    <View key={subCategory.name}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
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
