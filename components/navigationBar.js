import React from "react";
import { NativeRouter, Link } from "react-router-native";
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from "react-native";

export default class NavigationBar extends React.Component {
    renderNavBar = () => {
        return this.props.categories.edges
            .map(edge => edge.node)
            .map((category, index) => {
                return (
                    <View key={category.name}>
                        <Link
                            to={"/" + category.name}
                            underlayColor="#f0f4f7"
                            style={styles.navItem}
                            component={TouchableHighlight}
                        >
                            {index == 0 ? (
                                <View style={styles.selectedNav}>
                                    <Text style={styles.navBarTextFirstItem}>
                                        {category.name}
                                    </Text>
                                </View>
                            ) : (
                                <Text style={styles.navBarTextItem}>
                                    {category.name}
                                </Text>
                            )}
                        </Link>
                    </View>
                );
            });
    };

    render() {
        return (
            <ScrollView horizontal={true} style={styles.container}>
                {this.renderNavBar()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 100,
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    navBarTextItem: {
        color: "white",
        fontSize: 22,
        paddingLeft: 20,
    },
    navBarTextFirstItem: {
        color: "white",
        fontSize: 22,
    },
    selectedNav: {
        borderBottomColor: "#E0A749",
        borderBottomWidth: 2,
        marginLeft: 120,
        height: 40,
    },
});
