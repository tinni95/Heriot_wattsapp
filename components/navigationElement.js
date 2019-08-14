import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import PropTypes from "prop-types";

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
                    underlayColor="#f0f4f7"
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
                                {this.props.name}
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.navBarTextItem}>
                            {this.props.name}
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
        color: "#D6D1D1",
        fontSize: 22,
    },
    selectedNav: {
        borderBottomColor: "#E0A749",
        borderBottomWidth: 2,
        height: 40,
        alignItems: "center",
    },
    navBarTextSelectedItem: {
        fontSize: 25,
        paddingTop: -10,
        color: "white",
    },
});
