import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import PropTypes from "prop-types";

import { white, navigationBar } from "../constants/colors";
export default class NavigationElement extends React.Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    };
    render() {
        let route = this.props.index == 0 ? "/" : "/" + this.props.name;
        return (
            <View>
                <Link
                    to={route}
                    underlayColor={navigationBar.underlayColor}
                    style={styles.navItem}
                    component={TouchableOpacity}
                    onPress={() => this.props.updateState(this.props.index)}
                >
                    {this.props.index == this.props.active ? (
                        <View style={styles.selectedNav}>
                            <Text
                                style={[
                                    styles.navBarTextItem,
                                    styles.navBarTextSelectedItem,
                                ]}
                            >
                                {this.props.name.toUpperCase()}
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.navBarTextItem}>
                            {this.props.name.toUpperCase()}
                        </Text>
                    )}
                </Link>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    navBarTextItem: {
        textAlign: "center",
        color: navigationBar.navBarTextItem,
        fontSize: 20,
    },
    selectedNav: {
        borderBottomColor: navigationBar.selectedNavBorderBottom,
        borderBottomWidth: 2,
        height: 40,
        alignItems: "center",
    },
    navBarTextSelectedItem: {
        fontSize: 23,
        paddingTop: -10,
        color: white,
    },
});
