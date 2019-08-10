import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default class IconItem extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
                <Icon
                    containerStyle={{ marginRight: 10 }}
                    size={22}
                    color={this.props.color}
                    name={this.props.name}
                    type="ionicon"
                />
                <Text style={{ color: "white", fontSize: 14 }}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}
