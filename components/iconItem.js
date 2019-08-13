import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

export default class IconItem extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

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
