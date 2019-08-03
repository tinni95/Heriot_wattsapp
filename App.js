import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>{Constants.manifest.extra.header}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.manifest.primaryColor,
        alignItems: "center",
        justifyContent: "center",
    },
});
