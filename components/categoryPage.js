import React from "react";
import { Text, View } from "react-native";
export default class CategoryPage extends React.Component {
    renderMenuItems = () => {
        return this.props.menuItems.edges
            .map(edge => edge.node)
            .map(menuItem => {
                return (
                    <View key={menuItem.name}>
                        <Text>{menuItem.name}</Text>
                    </View>
                );
            });
    };

    render() {
        return this.renderMenuItems();
    }
}
