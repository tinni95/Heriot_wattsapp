import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

import { white } from "../constants/colors";

export default class IconItem extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View style={styles.container}>
                <Icon
                    containerStyle={styles.iconContainer}
                    size={22}
                    color={this.props.color}
                    name={this.props.name}
                    type="ionicon"
                />
                <Text style={styles.textContainer}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 20,
    },
    iconContainer: {
        marginRight: 10,
    },
    textContainer: {
        color: white,
        fontSize: 14,
    },
});
