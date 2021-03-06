import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "native-base";

import { main } from "../constants/colors";

const PurpleSquidGraphQlErrorDisplay = () => {
    return (
        <View style={styles.view}>
            <Icon name="alert" style={styles.icon} />
            <Text style={styles.text}>
                {"Oops, something went wrong!\n" +
                    "\n" +
                    "If this problem persists, please reach out to us by email at hello@purplesquid.scot"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color: main,
    },
    text: {
        color: "black",
        textAlign: "center",
    },
});

export default PurpleSquidGraphQlErrorDisplay;
