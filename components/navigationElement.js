import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
export default class NavigationElement extends React.Component {
    render() {
        return (
            <View>
                <Link
                    to={"/" + this.props.name}
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
