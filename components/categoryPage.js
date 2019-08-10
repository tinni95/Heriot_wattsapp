import React from "react";
import { Text, View } from "react-native";
export default class CategoryPage extends React.Component {
    renderMenuItems = menuItems => {
        return menuItems.edges
            .map(edge => edge.node)
            .map(menuItem => {
                return (
                    <View key={menuItem.name}>
                        <Text>{menuItem.name}</Text>
                    </View>
                );
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
